import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./DragCards.css";

const cards = [
  { id: 1, image: "assets/coding.jpg", text: "Passionate developer focused on creating innovative solutions" },
  { id: 2, image: "assets/pool.jpg", text: "Strategic thinker who enjoys the precision of a good pool game" },
  { id: 3, image: "assets/nature.jpg", text: "Nature enthusiast who loves exploring Kenya's beautiful landscapes" },
  { id: 4, image: "assets/music.jpg", text: "Music lover with an appreciation for diverse genres and artists" }
];

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const getTransformValues = (index, width) => {
  if (width <= 600) {
    return {
      rotate: 0,
      x: index === 0 ? -40 : 40,
      y: 0
    };
  }
  
  const spacingMultiplier = width <= 900 ? 1.5 : 2;
  
  if (width <= 900) {
    return {
      rotate: [-14, -5, 5, 14][index],
      x: [-35, -12, 12, 35][index] * spacingMultiplier,
      y: index * 8
    };
  }
  return {
    rotate: [-15, -5, 5, 15][index],
    x: [-50, -20, 20, 50][index] * spacingMultiplier,
    y: index * 10
  };
};

const FlipCard = ({ image, text, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [dragging, setDragging] = useState(false);
  const { width } = useWindowSize();
  const isMobile = width <= 600;
  const { rotate, x, y } = getTransformValues(index, width);

  const handleClick = () => {
    if (!isMobile && !dragging) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <motion.div
      className="card"
      onClick={handleClick}
      style={{ 
        zIndex: isFlipped ? 20 : index + 1,
        display: isMobile && index > 1 ? "none" : "block"
      }}
      whileHover={!isMobile ? { scale: 1.05, zIndex: 15 } : {}}
      drag={!isMobile}
      dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
      onDragStart={() => !isMobile && setDragging(true)}
      onDragEnd={() => !isMobile && setTimeout(() => setDragging(false), 100)}
      initial={{ rotate, x, y }}
      animate={{ rotate, x, y }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="card-front">
          <img src={image} alt="Card content" />
        </div>
        {!isMobile && (
          <div className="card-back">
            <p>{text}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ImageCards = () => {

  return (
    <div className="container">
      {cards.map((card, index) => (
        <FlipCard
          key={card.id}
          image={card.image}
          text={card.text}
          index={index}
        />
      ))}
    </div>
  );
};

export default ImageCards;