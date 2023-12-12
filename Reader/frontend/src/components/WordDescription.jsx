import React, { useState } from 'react';
import WordDescriptionSidebar from './WordDescriptionSidebar'; // Import the Sidebar component
import DisplaySameRootedWordsSidebar from "./DisplaySameRootedWordsSidebar";

const WordDescription = ({ wordDescript, isOpen,DisplayingWordsList  }) => {


  const [wordDetails, setWordDetails] = useState(wordDescript);
  const [isSidebarOpen, setIsSidebarOpen] = useState(isOpen);
  const [isDisplayingWordsList, setIsDisplayingWordsWithSameRoot] = useState(DisplayingWordsList);

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      {/* Button to open the sidebar */}
      <button onClick={() => setIsSidebarOpen(true)}>Open Sidebar</button>

      {/* Render the sidebar when it's open */}
      {isSidebarOpen && (
        <WordDescriptionSidebar wordDetails={wordDescript} onClose={handleCloseSidebar} />
      )}
      {isSidebarOpen && isDisplayingWordsList && (
        <DisplaySameRootedWordsSidebar wordDetails={wordDescript} onClose={handleCloseSidebar} />
        )}
    </div>
  );
};

export default WordDescription;
