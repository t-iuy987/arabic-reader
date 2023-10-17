import React from 'react';
import "../styles/wordDescriptionSidebar.css";

const WordDescriptionSidebar = ({ wordDetails, onClose }) => {
    
  // Check if wordDetails is empty (word not found)
  const isWordNotFound = !wordDetails.word;

  return (
    <div  className={` wsidebar ${isWordNotFound ? 'not-found' : ''}`}>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      {isWordNotFound ? (
        
        <p>Word Not Found</p>
      ) : (
        <div>
          <h2>لفظ: {wordDetails.word}</h2>
          <p>معنی: {wordDetails.definition}</p>
          <p>جذر: {wordDetails.root}</p>
          <p>علامات: {wordDetails.tags}</p>
        </div>
      )}
    </div>
  );
};

export default WordDescriptionSidebar;
