import { useState, useEffect } from "react";

function Blog() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5") // Replace with your API
            .then((response) => response.json())
            .then((data) => setBlogs(data))
            .catch((error) => console.error("Error fetching blogs:", error));
    }, []);

    return (
        <div className="blog-container">
            <h1>Latest Blogs</h1>
            <div className="blog-section">
                {blogs.map((blog) => (
                    <div key={blog.id} className="blog-card">
                        <h2>{blog.title}</h2>
                        <p>{blog.body.substring(0, 100)}...</p>
                        <a href={`https://example.com/blog/${blog.id}`} target="_blank">Read More</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
