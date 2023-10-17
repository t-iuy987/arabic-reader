import React, { useState } from "react";

export default function SideBars({ updateBookmarkContent }) {
  const [buttonStates, setButtonStates] = useState([
    { content: "تأليف", isClicked: false },
    { content:"كامل كيلاني", isClicked: false },
    { content:"أَمِيرُ الْعَفَارِيتِ", isClicked: false },
    { content:"الناشر مؤسسة هنداوي", isClicked: false },
    { content:" (١) زَادُ الْمُسَافِرِ", isClicked: false },
    { content:" (٢) الْوَاحَةُ الْمَسْحُورَةُ" ,isClicked: false },
    { content:"(٣) مَصْرَعُ «صَاخِدَةَ»", isClicked: false },
    { content:"(٤) النَّوَاةُ الْقَاتِلَةُ", isClicked: false },
    { content:" (٥) رَجَاءٌ مَقْبُولٌ", isClicked: false },
   
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
