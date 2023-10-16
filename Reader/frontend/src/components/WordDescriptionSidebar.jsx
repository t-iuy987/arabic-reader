import React, { useState,  useEffect} from 'react';
import "../styles/wordDescriptionSidebar.css";
import {getTags} from "../services/wordService.js"

const WordDescriptionSidebar = ({ wordDetails, onClose }) => {
    
  // Check if wordDetails is empty (word not found)
  const isWordNotFound = !wordDetails.word;

  // State to store the retrieved tags
  const [tags, setTags] = useState([]);

  // Function to fetch and set the tags
  const getTagsAction = async () => {
    try {
      const tags = await getTags(wordDetails.word);
      setTags(tags.split('|')); // Split tags by pipe separator
      
      setTags(tags.replace(/-/g, '').replace(/\|/g, ', '));
    } catch (error) {
      console.error('Error fetching tags:', error);
      setTags([]);
    }
  };

  // Fetch tags when the component mounts or when wordDetails changes
  useEffect(() => {
    getTagsAction();
  }, [wordDetails]);

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
          <p>علامات: {tags}</p>
          
          
        </div>
      )}
    </div>
  );
};

export default WordDescriptionSidebar;
