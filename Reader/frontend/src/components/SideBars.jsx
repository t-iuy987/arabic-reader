import React, { useState } from "react";

export default function SideBars({ updateBookmarkContent }) {
  const [buttonStates, setButtonStates] = useState([
    { content: "", isClicked: false },
    { content:"", isClicked: false },
    { content:"", isClicked: false },
    { content:"", isClicked: false },
    { content:"", isClicked: false },
    { content: "", isClicked: false },
    { content:"", isClicked: false },
    { content:"", isClicked: false },
    { content:"", isClicked: false },
    { content:"", isClicked: false },
   
  ]);

  const handleClick = (content) => {
    const updatedButtonStates = buttonStates.map((button) => {
      if (button.content === content) {
        return { ...button, isClicked: true };
      } else {
        return { ...button, isClicked: false };
      }
    });

    setButtonStates(updatedButtonStates);
    updateBookmarkContent(content);
  };

  return (
    <div>
      {buttonStates.map((button, index) => (
        <div key={index}>
          <button
            className="sidebar-btn"
            onClick={() => handleClick(button.content)}
            style={{ color: button.isClicked ? "#0f88eb" : "#000" }}
          >
            {button.content}
          </button>
          <hr style={{ width: "230px", height: "0" }} />
        </div>
      ))}
    </div>
  );
}
