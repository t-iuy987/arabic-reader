// ReadingProgress.jsx
import React, { useState, useEffect } from 'react';

const ReadingProgress = () => {
  const [readingProgress, setReadingProgress] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const maxScroll = documentHeight - windowHeight;
    const currentProgress = (scrollPosition / maxScroll) * 100;

    setReadingProgress(currentProgress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('readingProgress', readingProgress.toString());
  }, [readingProgress]);

  useEffect(() => {
    const savedProgress = localStorage.getItem('readingProgress');
    if (savedProgress) {
      setReadingProgress(parseFloat(savedProgress));
    }
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', height: '30px', background: '#bf7e81', zIndex: 999 }}>
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <p style={{ margin: 0, padding: '0 10px', color: 'white' }}>Reading Progress:</p>
        <div style={{ width: `${readingProgress}%`, height: '100%', background: '#2c3e50' }}></div>
        <p style={{ margin: 0, padding: '0 10px', color: 'white' }}>{Math.round(readingProgress)}%</p>
      </div>
    </div>
  );
};

export default ReadingProgress;
