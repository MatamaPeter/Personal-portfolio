import Header from "./Components/Header";
import './App.css';
import { motion } from "motion/react";
import Home from './Components/Home.jsx';


function App() {
  return (
    <div className="main-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{duration:0.5}}
      
      >
        <Header />
        <Home />



      </motion.div>
    </div>
  )
}

export default App
