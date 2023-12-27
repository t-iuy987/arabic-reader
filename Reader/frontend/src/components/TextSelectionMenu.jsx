import React, { useState, useEffect, useRef  } from 'react';

const TextSelectionMenu = ({ onAction }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [selectedText, setSelectedText] = useState('');

  const menuRef = useRef(null);

  const buttonStyle = {
    backgroundColor: 'black', // Button background color
    color: 'white', // Text color
    border: 'none', // No border
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)', // Very light bottom border
    padding: '1px', // Padding inside the buttons
    textAlign: 'center', // Center the text inside the buttons
    cursor: 'pointer', // Change mouse cursor on hover
    transition: 'background-color 0.3s', // Transition for background color change on hover
  };

  useEffect(() => {
    const handleMouseUp = (e) => {
      const text = window.getSelection().toString();
      if (text) {
        const range = window.getSelection().getRangeAt(0).getBoundingClientRect();
        const menuWidth = 200; // Assuming a fixed width for the menu for now
        const menuHeight = 210; // Assuming a fixed height for the menu for now
        // Calculate the position
      const topPosition = range.top - menuHeight + window.scrollY;
      const leftPosition = range.left + (range.width / 2) + window.scrollX - (menuWidth / 2);
        setMenuPosition({
          top: topPosition > 0 ? topPosition : 0, // Make sure it does not go above the page
          left: leftPosition,        });
        setSelectedText(text);
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    const handleClickOutside = (e) => {
      // If the menu is visible and the click target is not the menu, hide the menu
      if (isVisible && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsVisible(false);
      }
    };

    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('click', handleClickOutside);
    };
  },[] );

  return isVisible && (
    <div
    ref={menuRef} // Attach the ref here
    style={{
      position: 'absolute',
      top: `${menuPosition.top}px`,
      left: `${menuPosition.left}px`,
      width: '200px', // Set a fixed width or calculate this based on content
      height: '200px', // Set a fixed height or calculate this based on content
      backgroundColor: 'black',
      color: 'white',
      padding: '8px',
      borderRadius: '4px',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      zIndex: 1000, // Ensure it's above other elements
      boxSizing: 'border-box', // Make sure padding and border are included in the width and height
    }}
    >
      <button style={buttonStyle} onClick={() => {onAction('findRoot', selectedText);setIsVisible(false);}}>Similar Words</button>
      <button style={buttonStyle} onClick={() => {onAction('fav', selectedText);setIsVisible(false);}}>❤ Favorite</button>
      <button style={buttonStyle} onClick={() => {onAction('describe', selectedText);setIsVisible(false);}}>Describe</button>
      <button style={buttonStyle} onClick={() => {onAction('glossary', selectedText);setIsVisible(false);}}>Glossary</button>
      <button style={buttonStyle} onClick={() => {onAction('bookmark', selectedText);setIsVisible(false);}}>Bookmark</button>
      <button style={buttonStyle} onClick={() => {onAction('custom_dict', selectedText);setIsVisible(false);}}>Custom Dictionary</button>
    </div>
  );
};

export default TextSelectionMenu;