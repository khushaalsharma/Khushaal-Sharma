// Typewriter.js
import React, { useState, useEffect } from 'react';
import './Styles.css';

const Typewriter = ({ text, typingSpeed }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === text.length) {
        clearInterval(interval);
        return;
      }
      setDisplayText((prevText) => prevText + text[currentIndex]);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [currentIndex, text, typingSpeed]);

  return (
    <div className="typewriter">
      <span>{displayText}</span>
      <span className="cursor">|</span>
    </div>
  );
};

export default Typewriter;
