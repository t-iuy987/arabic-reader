import React, { useState, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/popover.css';
import debounce from 'lodash/debounce';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import TextSelectionMenu from './TextSelectionMenu';

const styles = {
  backgroundColor: 'white',
  padding: '20px',
  border: '1px solid #ccc',
};

function DisplayBook() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const [showActions, setShowActions] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedText, setSelectedText] = useState('');
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [isMenuVisible, setIsMenuVisible] = useState(false);


  const filepath = `http://localhost:4000/api/bookFiles/${id}`;

  const docs = [
    { uri: filepath },
    // You can add more documents here if needed
  ];

  const handleMouseUp = (e) => {
    e.preventDefault();
    const selection = window.getSelection();
    if (selection.toString()) {
      setSelectedText(selection.toString());
      const SelectedText= selection.toString();
      setMenuPosition({ x: e.clientX, y: e.clientY });
      setIsMenuVisible(true);
    } else {
      setIsMenuVisible(false);
    }
  };

  const handleAction = (action) => {
    switch (action) {
      case 'copy':
        // Implement your copy action here
        console.log('Copy action');
        break;
      case 'findRoot':
        // Implement your findRoot action here
        console.log('Find root action');
        break;
      case 'add':
        // Implement your add action here
        console.log('Add action');
        break;
      default:
        break;
    }
    setShowActions(false);
  };

  const handleClick = useCallback((e) => {
    const container = containerRef.current;
    const containerBounds = container.getBoundingClientRect();
    const xi = e.clientX - containerBounds.left;
    const yi = e.clientY - containerBounds.top;
    console.log(`Clicked at (${xi}, ${yi})`);

    setPosition({ x: xi, y: yi });
    setShowActions(true);
  }, []);

  // Function to display the content of the book
  const display = () => {
    fetch(filepath, {
      headers: {
        'Content-Type': 'text/plain',
      },
    })
      .then((response) => response.text())
      .then((text) => {
        // Do something with the text content of the file
        console.log(text);
      })
      .catch((error) => {
        // Handle any errors that occurred while fetching the file
        console.error(error);
      });
  };

  return (
    <div className="displayBook" style={styles}>
      <div>
        <div onMouseUp={handleMouseUp} ref={containerRef}>
          <DocViewer
            documents={docs}
            pluginRenderers={DocViewerRenderers}
            config={{
              header: {
                disableHeader: false,
                disableFileName: false,
                retainURLParams: false,
              },
            }}
          />
          <TextSelectionMenu
  show={isMenuVisible}             // Pass isMenuVisible state
  position={menuPosition}         // Pass menuPosition state
  onCopy={() => handleAction('copy')}     // Pass handleAction function for copy
  onfindRoot={() => handleAction('findRoot')} // Pass handleAction function for findRoot
  onAdd={() => handleAction('add')}       // Pass handleAction function for add
/>
        </div>
        {showActions && (
          <div className="actions">
            <div className="word-options" style={{ top: position.y, left: position.x }}>
              <button onClick={() => handleAction('copy')}>Define</button>
              <button onClick={() => handleAction('findRoot')}>View Similar Words</button>
              <button onClick={() => handleAction('add')}>Add to Favorites</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


export default DisplayBook;
