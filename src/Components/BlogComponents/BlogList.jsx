import { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // React Router Link component

function BlogList() {
  const [blogs, setBlogs] = useState([]);  // To store fetched blog posts
  const [loading, setLoading] = useState(true);  // To handle loading state

  // Fetch posts based on tags and pagination
  async function fetchPostsFromTags(tags, pages = 1) {
    let allPosts = [];

    for (const tag of tags) {
      for (let page = 1; page <= pages; page++) {
        try {
          const response = await fetch(`https://dev.to/api/articles?tag=${tag}&page=${page}`);
          const posts = await response.json();
          allPosts = [...allPosts, ...posts];
        } catch (error) {
          console.error(`Error fetching posts for tag "${tag}" on page ${page}:`, error);
        }
      }
    }

    // Sort and filter to get the 16 most recent posts with images
    return allPosts
      .filter(post => post.cover_image)  // Only posts with images
      .slice(0, 16);  // Limit to 16 posts
  }

  // Fetch the posts when the component mounts
  useEffect(() => {
    async function displayPosts() {
      const tags = ['javascript', 'python', 'webdev'];  // Tags to fetch
      const pagesToFetch = 2;  // Number of pages to fetch

      setLoading(true);
      const posts = await fetchPostsFromTags(tags, pagesToFetch);
      setBlogs(posts);
      setLoading(false);
    }

    displayPosts();
  }, []);  // Runs only once on mount

  return (
    <div className="blog-container">
      <h1>Latest Blogs with Pictures</h1>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="blog-section">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              {blog.cover_image && (
                <img src={blog.cover_image} alt={blog.title} className="blog-image" />
              )}
              <h2>
                <Link to={`/blog/${blog.id}`}>{blog.title}</Link>  {/* Link to blog detail */}
              </h2>
              <p>{blog.description ? blog.description : blog.body.substring(0, 100)}...</p>
              <p><strong>By:</strong> {blog.user.username}</p>
              <p><strong>Published:</strong> {new Date(blog.published_at).toLocaleDateString()}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BlogList;
