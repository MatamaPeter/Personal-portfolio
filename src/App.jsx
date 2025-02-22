import Header from "./Components/Header";
import './App.css';
import { motion } from "motion/react";



function App() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{duration:0.5}}
      
      >
      <Header />
      </motion.div>
    </>
  )
}

export default App
