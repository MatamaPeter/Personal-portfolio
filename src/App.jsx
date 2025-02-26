import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "motion/react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Plans from "./Components/Plans";
import Blogs from "./Components/Blogs";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="main-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Header /> {/* Header should be outside Routes for persistent navigation */}
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/blogs/*" element={<Blogs />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </motion.div>
      </div>
    </Router>
  );
}

export default App;
