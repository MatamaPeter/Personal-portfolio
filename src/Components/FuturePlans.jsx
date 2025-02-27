import { motion } from 'framer-motion';
import './FuturePlans.css';

const futurePlans = [
  {
    title: "Personal Growth",
    description: "Continuing to evolve as a developer, focusing on learning new technologies and tools to stay at the forefront of the industry.",
    icon: "💻"
  },
  {
    title: "Travel & Exploration",
    description: "Exploring different parts of the world, immersing myself in diverse cultures, and capturing beautiful landscapes.",
    icon: "🌍"
  },
  {
    title: "Community Impact",
    description: "Contributing to open-source projects and helping build resources for aspiring developers.",
    icon: "🤝"
  },
  {
    title: "Music & Arts",
    description: "Learning new instruments and exploring different genres of music to fuel creativity.",
    icon: "🎶"
  }
];

const FuturePlans = () => {
  return (
    <div className="future-plans">
      <section className="intro">
        <motion.h1 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          My Future Plans
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.5 }}
        >
          Here’s a look at what I’m looking forward to in the coming years. These are the things I’m passionate about and hope to achieve.
        </motion.p>
      </section>

      <section className="plans">
        {futurePlans.map((plan, index) => (
          <motion.div 
            key={index} 
            className="plan-card" 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3 * index, duration: 0.6 }}
          >
            <div className="icon">{plan.icon}</div>
            <h3>{plan.title}</h3>
            <p>{plan.description}</p>
          </motion.div>
        ))}
      </section>

      
    </div>
  );
};

export default FuturePlans;
