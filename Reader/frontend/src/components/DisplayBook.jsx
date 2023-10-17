import React, { useState, useRef, useCallback, useEffect} from 'react';
import { useLocation, useParams } from 'react-router-dom';
import '../styles/popover.css';
//import debounce from 'lodash/debounce';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import TextSelectionMenu from './TextSelectionMenu';
import {getWordMeaning, getWordsWithSameRoot} from "../services/wordService.js"
//import WordDescription from './WordDescription';
import WordDescriptionSidebar from './WordDescriptionSidebar';
import DisplaySameRootedWordsSidebar from './DisplaySameRootedWordsSidebar';
import {getBookIdByTitle} from "../services/bookService";
import { useBookContext } from './BookContext';


const styles = {
  backgroundColor: 'white', // White background
  padding: '20px',
  border: '1px solid #ccc',
  width: '80%',
  margin: '0 auto',
  fontFamily: 'Arial, sans-serif', // Use a suitable Arabic font-family
  direction: 'rtl', // Set text direction to right-to-left
  lineHeight: '1.6', // Adjust line height for better readability
  whiteSpace: 'pre-wrap', // Preserve line breaks
  fontSize: '18px', // Adjust the font size for readability
  color: '#333', // Dark text color
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle shadow for depth
  borderRadius: '5px', // Rounded corners
  textAlign: 'justify', // Align text to justify for a neater look
  margin: '20px auto', // Add margin for better spacing
  padding: '30px', // Increase padding for readability
};

function DisplayBook(props) {
  const { id } = useParams();
  const containerRef = useRef(null);
  const [showActions, setShowActions] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedText, setSelectedText] = useState('');
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [wordList, setWordList] = useState();
  const [isDisplayingWordsWithSameRoot, setIsDisplayingWordsWithSameRoot] = useState(false)
  const [userData, setUserData] = useState("");
  const [user, setUser] = useState("");
  const { bookTitle } = useBookContext();
  console.log(bookTitle);
  const filepath = `http://localhost:4000/api/bookFiles/${id}`;

  const docs = [
    { uri: filepath },
    // can aslo add more documents here if needed
  ];
  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    const selection = window.getSelection();
    if (selection.toString()) {
      setSelectedText(selection.toString());
      //console.log(selection.toString());
      setMenuPosition({ x: e.clientX, y: e.clientY });
      setIsMenuVisible(true);
    } else {
      setIsMenuVisible(false);
    }
  };
  useEffect(() => {
    // Use the updated selectedText here
    console.log(selectedText);
  }, [selectedText]);

  useEffect(() => {
    fetch("http://localhost:4000/api/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");


        setUserData(data.data);
        console.log("data",data);

        if (data.data == "token expired") {
          alert("Token expired login again");
          window.localStorage.clear();
          window.location.href = "/login";
        }
      });
  }, []);
  function getUser(){
    const usr = userData.email;
    setUser(usr);
  }

  const handleAction = async (action) => {
    switch (action) {
      case 'getPOS':
        // Implement  get parts of speech action
        console.log('Copy action');
        break;
      case 'findRoot':
        // Implementing  findRoot action
        try {
          console.log("findroot")
          const words = await getWordsWithSameRoot(selectedText);
          setIsSidebarOpen(true);
          setIsDisplayingWordsWithSameRoot(true);
          setWordList(words);
          console.log('Description:', wordList);
          console.log(isSidebarOpen);
          console.log(isDisplayingWordsWithSameRoot);

        } catch (error) {
          setDescription("");
          setIsSidebarOpen(true);
          setIsDisplayingWordsWithSameRoot(true);


          console.log("meaning not found")
          console.error('Error fetching description:', error);
        };
        break;
      case 'addToFavorite':
        // Implementing addToFavorite Action here
        try {
          console.log(bookTitle);
          const bookId = await getBookIdByTitle(bookTitle);
          console.log("mbnv"+bookId);
          //getUser(); // set the user
          // const response = await bookService.favoriteWord({
          //   bookId,
          //   word: selectedText,
          // });
          // Handle the response as needed (e.g., show a success message).
        } catch (error) {
          // Handle errors
          console.log("jabdjbajs");
        }
       
      
        break;
      case 'describe':
        try {
          const meaning = await getWordMeaning(selectedText);
          setIsSidebarOpen(true);
          setIsDisplayingWordsWithSameRoot(false);
          setDescription(meaning);
          console.log('Description:', meaning);
          console.log(isSidebarOpen);

        } catch (error) {
          setDescription("");
          setIsSidebarOpen(true);

          console.log("meaning not found")
          console.error('Error fetching description:', error);
        }; 
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
            show={isMenuVisible}
            position={menuPosition}
           // onCopy={() => handleAction('copy')}
            onfindRoot={() => handleAction('findRoot')}
            onAdd={() => handleAction('add')}
            onDescribe={() => handleAction('describe')}
          />

        </div>
        {isSidebarOpen && (<WordDescriptionSidebar wordDetails={description} onClose={handleCloseSidebar} />)}
        {isSidebarOpen && isDisplayingWordsWithSameRoot && (<DisplaySameRootedWordsSidebar wordDetail={wordList} onClose={handleCloseSidebar} />)}

        {showActions && (
          <div className="actions">
            <div className="word-options" style={{ top: position.y, left: position.x }}>
              <button onClick={() => handleAction('getPOS')}>Find Parts of Speech</button>
              <button onClick={() => handleAction('findRoot')}>View Similar Words</button>
              <button onClick={() => handleAction('addToFavorite')}>Add to Favorites</button>
              <button onClick={() => handleAction('describe')}>Describe the word</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DisplayBook;
