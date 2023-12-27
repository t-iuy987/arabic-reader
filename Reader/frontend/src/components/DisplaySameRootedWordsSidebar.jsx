import React from 'react';
import "../styles/wordDescriptionSidebar.css";

const DisplaySameRootedWordsSidebar = ({ wordDetail, onClose }) => {
  const isWordNotFound = !wordDetail;
  const sidebarStyles = {
    height: '100%', /* Set a height */
    overflowY: 'auto', /* Enable vertical scrolling */
    /* Add more styles here as needed */
  };

  return (
    <div style={sidebarStyles} className={`wsidebar ${isWordNotFound ? 'not-found' : ''}`}>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      {isWordNotFound ? (
        <p>Word Not Found</p>
      ) : (
        <div>
          {wordDetail.map((item) => (
            <div key={item.id} className=''>
              <h2>لفظ: {item.word}</h2>
              <p><b>معنی:</b> {item.definition}</p>
              <p><b>جذر: </b>{item.root}</p>
              {/*<p>Tags: {item.tags}</p>*/}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplaySameRootedWordsSidebar;
