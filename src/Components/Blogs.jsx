import { Routes, Route } from "react-router-dom";
import BlogDetail from "./BlogComponents/BlogDetail";  
import BlogList from './BlogComponents/BlogList.jsx';
import './blog.css';

function Blogs() {
  return (
    <Routes>
      <Route path="/" element={<BlogList />} /> {/* List of blogs */}
      <Route path=":id" element={<BlogDetail />} /> {/* Blog details */}
    </Routes>
  );
}

export default Blogs;
