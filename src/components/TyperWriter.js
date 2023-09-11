import React, { useState, useEffect } from 'react';
// import { Audio } from 'react-loader-spinner';
const Typewriter = ({ text }) => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setTypedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100); // Delay between typing each character (adjust as needed)
      
      return () => clearTimeout(timeout);
    // } else {
    //   setIsLoading(false); // Typewriter effect finished, set isLoading to false
    }
  }, [currentIndex, text]);

return (


<span>{typedText}</span>
)
}


export default Typewriter;
