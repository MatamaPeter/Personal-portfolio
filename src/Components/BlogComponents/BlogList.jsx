import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPostsFromTags = async (tags, pages = 1) => {
    try {
      const requests = tags.flatMap(tag =>
        Array.from({ length: pages }, (_, i) =>
          fetch(`https://dev.to/api/articles?tag=${tag}&page=${i + 1}`).then(res => res.json())
        )
      );

      const responses = await Promise.allSettled(requests);
      const allPosts = responses
        .filter(res => res.status === "fulfilled")
        .flatMap(res => res.value);

      return allPosts
        .filter(post => post.cover_image) // Keep only posts with images
        .slice(0, 16); // Limit to 16 posts
    } catch (err) {
      console.error("Error fetching blog posts:", err);
      throw new Error("Failed to fetch blog posts.");
    }
  };

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    (async () => {
      try {
        const posts = await fetchPostsFromTags(["javascript", "python", "webdev"], 2);
        if (isMounted) setBlogs(posts);
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    })();

    return () => {
      isMounted = false; // Prevents state updates on unmounted component
    };
  }, []);

  const blogList = useMemo(() => {
    return blogs.map((blog, index) => (
      <article key={index} className="blog-card">
        <img
          loading="lazy"
          src={blog.cover_image}
          srcSet={`${blog.cover_image} 1x, ${blog.cover_image} 2x`}
          alt={blog.title}
          className="blog-image"
        />
        <h2>
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </h2>
        <p>{blog.description || `${blog.body.substring(0, 100)}...`}</p>
        <p><strong>By:</strong> {blog.user.username}</p>
        <p><strong>Published:</strong> {new Date(blog.published_at).toLocaleDateString()}</p>
      </article>
    ));
  }, [blogs]);

  return (
    <div className="blog-container">
      <h1>Tech Blogs</h1>
      <p>Latest tech-based blogs. Stay tuned!</p>

      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {!loading && !error && blogs.length === 0 && <p>No blogs found. Check back later!</p>}
      {!loading && !error && <section className="blog-section">{blogList}</section>}
    </div>
  );
}

export default BlogList;
