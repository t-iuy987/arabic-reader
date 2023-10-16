import React from 'react';
import "../styles/wordDescriptionSidebar.css";
import { getTags } from '../services/wordService';

const GetTagsSidebar = ({ tags, onClose }) => {
    
  // Check if tags is empty (word not found)
  const isTagNotFound = !tags.word;
 const getTagsAction = async (wordDetails) => {
    const tags = await getTags(wordDetails.word);
    return tags;
  };

  return (
    <div  className={` wsidebar ${isTagNotFound ? 'not-found' : ''}`}>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      {isTagNotFound ? (
        
        <p>Tags Not Found</p>
      ) : (
        <div>
          <h2>لفظ: {wordDetails.word}</h2>
          <p>معنی: {wordDetails.definition}</p>
          <p>جذر: {wordDetails.root}</p>
          <p>علامات: {getTagsAction}</p>
        </div>
      )}
    </div>
  );
};

export default WordDescriptionSidebar;
