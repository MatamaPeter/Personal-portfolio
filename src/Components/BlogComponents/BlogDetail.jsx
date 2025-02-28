import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";  // For accessing route parameters

function BlogDetail() {
  const [blog, setBlog] = useState(null);  // To store the blog's full details
  const [loading, setLoading] = useState(true);  // To handle loading state
  const { id } = useParams();  // Get the blog ID from the URL


  // Fetch full details of the blog by ID
  async function fetchBlogDetails(id) {
    try {
      const response = await fetch(`https://dev.to/api/articles/${id}`);
      const post = await response.json();
      setBlog(post);
      setLoading(false);
    } catch (error) {
      console.error(`Error fetching blog details for ID ${id}:`, error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBlogDetails(id);  // Fetch the blog details when the component mounts
  }, [id]);  // Runs when the ID changes (if navigating to a different blog)

  return (
    <div className="blog-detail-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        blog && (
          <div className="blog-detail">
            <h1>{blog.title}</h1>
            {blog.cover_image && (
              <img src={blog.cover_image} loading="lazy" alt={blog.title} className="blog-image" />
            )}
            <p><strong>By:</strong> {blog.user.username}</p>
            <p><strong>Published:</strong> {new Date(blog.published_at).toLocaleDateString()}</p>
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.body_html }} />
            {/* Render the full body content of the blog */}
          </div>
        )
      )}
    </div>
  );
}

export default BlogDetail;
