import React from 'react';
import "../styles/wordDescriptionSidebar.css";

const DisplaySameRootedWordsSidebar = ({ wordDetail, onClose }) => {
  const isWordNotFound = !wordDetail;

  return (
    <div className={`wsidebar ${isWordNotFound ? 'not-found' : ''}`}>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      {isWordNotFound ? (
        <p>Word Not Found</p>
      ) : (
        <div>
          {wordDetail.map((item) => (
            <div key={item.id}>
              <h2>Word: {item.word}</h2>
              <p>Definition: {item.definition}</p>
              <p>Root: {item.root}</p>
              <p>Tags: {item.tags}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplaySameRootedWordsSidebar;