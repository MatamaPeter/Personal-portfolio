import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "motion/react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Goals from "./Components/Goals";
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
          <Analytics />
          <SpeedInsights />
          <Header /> {/* Header should be outside Routes for persistent navigation */}
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/goals" element={<Goals />} />
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
