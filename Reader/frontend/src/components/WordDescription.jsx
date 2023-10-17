import React, { useState } from 'react';
import WordDescriptionSidebar from './WordDescriptionSidebar'; // Import the Sidebar component

const WordDescription = ({ wordDescript, isOpen }) => {
  // Example word details (you can replace this with actual data)
  const initialWordDetails = {
    word: 'Example',
    meaning: 'An instance illustrating a rule or method',
    root: 'Ex',
    tags: 'Noun, Example',
  };

  const [wordDetails, setWordDetails] = useState(wordDescript);
  const [isSidebarOpen, setIsSidebarOpen] = useState(isOpen);

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
    </div>
  );
};

export default WordDescription;
