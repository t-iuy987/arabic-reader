import React, { useState, useRef, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
//import "../styles/popover.css";
import debounce from "lodash/debounce";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import TextSelectionMenu from "./TextSelectionMenu";
import {getWordMeaning, getWordsWithSameRoot} from "../services/wordService.js"
import WordDescriptionSidebar from "./WordDescriptionSidebar";
import DisplaySameRootedWordsSidebar from './DisplaySameRootedWordsSidebar.jsx';
//import MenuListComposition from "./MenuListComposition";

import Appbar from "./AppBar";
import SideBars from "./SideBars";
import Sidebar from "./Sidebar";
import TextSelector from "text-selection-react";
import ReadingProgress from './ReadingProgress';

function DisplayBook() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const [showActions, setShowActions] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedText, setSelectedText] = useState("");
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [wordList, setWordList] = useState();
  // const [selectedItem, setSelectedItem] = useState("");
  const [isDisplayingWordsWithSameRoot, setIsDisplayingWordsWithSameRoot] = useState(false)
  const [userData, setUserData] = useState("");
  const [user, setUser] = useState("");
  const [sidebarContent, setSidebarContent] = useState("");
  const [theme, setTheme] = useState("white");
  // const [searchText, setSearchText] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [searchResults, setSearchResults] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [isSidebarsOpen, setIsSidebarsOpen] = useState(false);
  const [showMenuTimeout, setShowMenuTimeout] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const [styles, setStyles] = useState({
    backgroundColor: "white",
    padding: "20px",
    border: "1px solid #ccc",
    width: "80%",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif", // Use a suitable Arabic font-family
    direction: "rtl", // Set text direction to right-to-left
    lineHeight: "1.6", // Adjust line height for better readability
    whiteSpace: "pre-wrap", // Preserve line breaks
    fontSize: "18px", // Adjust the font size for readability
    // color: "", // Dark text color
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add a subtle shadow for depth
    borderRadius: "5px", // Rounded corners
    textAlign: "justify", // Align text to justify for a neater look
    margin: "20px auto", // Add margin for better spacing
    padding: "30px", // Increase padding for readability
  });
 

  const changeFontSize = (increase) => {
    setFontSize((prevFontSize) => (increase ? prevFontSize + 2 : prevFontSize - 2));
    setStyles((prevStyles) => ({
      ...prevStyles,
      fontSize: `${fontSize}px`, // Update the fontSize property in styles
    }));
  };

  const changeTheme = (selectedTheme) => {
    let backgroundColor, textColor;

    switch (selectedTheme) {
      case "white":
        backgroundColor = "white";
        textColor = "black";
        break;
      case "black":
        backgroundColor = "black";
        textColor = "white";
        break;
      case "pink":
        backgroundColor = "pink";
        textColor = "purple";
        break;
      default:
        // Default theme (white)
        backgroundColor = "white";
        textColor = "black";
    }

    setTheme(selectedTheme);
    setStyles({
      ...styles,
      backgroundColor: backgroundColor,
      color: textColor,
    });
  };

  const handleSearch = debounce((text) => {
    console.log("Searching for:", text);

    const results = performSearch(text);
    setSearchResults(results);
  }, 300);

  const performSearch = (searchText) => {
    return [
      { page: 1, text: "Sample search result 1" },
      { page: 3, text: "Sample search result 2" },
    ];
  };
  const handlerSubmit = () => {};
  const filepath = `http://localhost:4000/api/bookFiles/${id}`;

  const docs = [{ uri: filepath }];

  const handleMouseUp = (e) => {
    e.preventDefault();
    const selection = window.getSelection();
    if (selection.toString()) {
      setSelectedText(selection.toString());
      setScrollPosition(window.scrollY);
      //console.log(selection.toString());
      const X = e.clientX + window.scrollX;
      const Y = e.clientY + window.scrollY;
      setMenuPosition({ x: X, y: Y });

      //setIsMenuVisible(true);
      // Use a small timeout to display the menu
    const timeout = setTimeout(() => {
      setIsMenuVisible(true);
    }, 100); // Adjust the delay as needed
    
    } else {
      setIsMenuVisible(false);
      //window.scrollTo(0, scrollPosition);
      // Clear the timeout when text is not selected
      if (showMenuTimeout) {
        clearTimeout(showMenuTimeout);
      }
    } 
  };
 
  // useEffect(() => {
  //   const handleSelection = () => {
  //     const selection = window.getSelection();
  //     if (selection && selection.toString()) {
  //       setSelectedText(selection.toString());
  //       setScrollPosition(window.scrollY);
  //       const range = selection.getRangeAt(0);
  //       const rect = range.getBoundingClientRect();
  //       setMenuPosition({ x: rect.x + rect.width, y: rect.y + rect.height });
  //       setIsMenuVisible(true);
  //     } else {
  //       setIsMenuVisible(false);
  //     }
  //   };

  //   document.addEventListener('mouseup', handleSelection);

  //   return () => {
  //     document.removeEventListener('mouseup', handleSelection);
  //   };
  // }, []);


  const handleMenuClose = () => {
    // Restore the scroll position when the menu disappears
    window.scrollTo(0, scrollPosition);
    setIsMenuVisible(false);
  };
  useEffect(() => {
    console.log(selectedText);
  }, [selectedText]);

//dictionay sidebar
  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openBooksList = () => {};

  const toggleSidebar = () => {
    setIsSidebarsOpen(!isSidebarsOpen);
  };

  const updateBookmarkContent = (content) => {
    setSidebarContent((prevContent) => [...prevContent, content]);
  };
  
  const openSearch = () => {};

  const handleAction = async (action) => {
    switch (action) {
      case "findRoot":
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
            action = ""
          };
        break;

        case "fav":
          // Implement the add favorite action
          break;

        case "bookmark":
         // Get the current scroll position
         const currentPosition = window.scrollY;

      // Add the bookmark to the state
         setBookmarks((prevBookmarks) => [...prevBookmarks, currentPosition]);
  
      // Hide the selection menu
        setShowActions(false);
         break;
   
         
      case "describe":
        try {
          const meaning = await getWordMeaning(selectedText);
          setIsSidebarOpen(true);
          setDescription(meaning);
          console.log("Description:", meaning);
          console.log(isSidebarOpen);
        } catch (error) {
          setDescription("");
          setIsSidebarOpen(true);

          console.log("meaning not found");
          console.error("Error fetching description:", error);
          action = ""
        }
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

  const display = () => {
    fetch(filepath, {
      headers: {
        "Content-Type": "text/plain",
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
    <div>
      <Appbar
        openBooksList={openBooksList}
        toggleSidebar={toggleSidebar}
        changeTheme={changeTheme}
        changeFontSize={changeFontSize}
        openSearch={openSearch}
        selectedText={selectedText}
        updateBookmarkContent={updateBookmarkContent}
        sidebarContent={sidebarContent}
        onSearch={handleSearch}
      />

<div className="displayBook ">
        <div className="displayBookContent" >
          <div 
         // onMouseUp={handleMouseUp}
        //  ref={containerRef}
          style={{ fontSize: `${fontSize}px` }}>

            <DocViewer
              documents={[{ uri: `http://localhost:4000/api/bookFiles/${id}` }]}
            // pluginRenderers={DocViewerRenderers}
              // config={{
              //   header: {
              //     disableHeader: false,
              //     disableFileName: false,
              //     retainURLParams: false,
              //   },
              // }}
              style={styles}
            />
           <TextSelector style={{position: "absolute", transform:"translate3d(-12px,0px, 0px, 0px)"}}
        events={[
          {
            text: "Similar Words",
            handler: () => handleAction("findRoot")//() => {console.log(window.getSelection().toString())}
          },
          {
            text: "❤ Favorite",
            handler: () => handleAction("fav")
          },
          {
            text: "Bookmark",
            handler: () => handleAction("bookmark")
          },
          {
            text: "Describe",
            handler: () => handleAction("describe")
          }
        ]}
        //color={"yellow"}
        //colorText={true}
      >
      
      </TextSelector>

             {/* {isMenuVisible && <TextSelectionMenu
           // show={isMenuVisible}
            position={menuPosition}
            //onCopy={() => handleAction('copy')}
            onfindRoot={() => handleAction('findRoot')}
            onAdd={() => handleAction('add')}
            onDescribe={() => handleAction('describe')}
          /> 
            }  */}

        </div>
        {isSidebarOpen && (<WordDescriptionSidebar wordDetails={description} onClose={handleCloseSidebar} />)}
        {isSidebarOpen && isDisplayingWordsWithSameRoot && (<DisplaySameRootedWordsSidebar wordDetail={wordList} onClose={handleCloseSidebar} />)}
              
        {/* 
        {showActions && (
          <div className="actions">
            <div className="word-options" style={{ top: position.y, left: position.x }}>
              <button onClick={() => handleAction('getPOS')}>Find Parts of Speech</button>
              <button onClick={() => handleAction('findRoot')}>View Similar Words</button>
              <button onClick={() => handleAction('addToFavorite')}>Add to Favorites</button>
              <button onClick={() => handleAction('describe')}>Describe the word</button>
            </div>
          </div>
        )}*/}
        </div>
        <ReadingProgress />

        {isSidebarsOpen && (
          <div
            className={`sidebars ${isSidebarsOpen ? "open" : ""}`}
            style={{ fontWeight: "700" }}
          >
            <SideBars updateBookmarkContent={updateBookmarkContent} />
          </div>
        )}

      </div>
    </div>
  );
}

export default DisplayBook;
