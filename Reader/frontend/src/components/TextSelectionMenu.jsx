import React from 'react';


const TextSelectionMenu = ({ show, position, onCopy, onfindRoot, onAdd, onDescribe }) => {
  const menuStyle = {
    display: show ? 'block' : 'none',
    position: 'absolute',
    top: `${position.y}px`,
    left: `${position.x}px`,
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius:'7px',
    padding: '10px',
    zIndex: 9999, // Ensure it appears above other content
  };

  const buttonStyle = {
    backgroundColor: '#e0d2c0',
    color: 'white',
    border: 'none',
    borderRadius:'7px',
    padding: '5px 10px',
    margin: '5px',
    cursor: 'pointer',
  };

  return (
    
    <div style={menuStyle}>
      <button style={buttonStyle} onClick={onCopy}>Copy</button>
      <button style={buttonStyle} onClick={onfindRoot}>Find Root</button>
      <button style={buttonStyle} onClick={onAdd}>❤ Favorite</button>
      <button style={buttonStyle} onClick={onDescribe}>Describe</button>
    </div>
    
  );
};


export default TextSelectionMenu;
