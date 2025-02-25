import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogList from "./BlogList";  // Blog list component
import BlogDetail from "./BlogDetail";  // Blog detail component

import './blog.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Use 'element' to specify the component in v6 */}
        <Route path="/" element={<BlogList />} /> {/* List of blogs */}
        <Route path="/blog/:id" element={<BlogDetail />} /> {/* Full blog details */}
      </Routes>
    </Router>
  );
}

export default App;
