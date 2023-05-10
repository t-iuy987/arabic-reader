// import React, {useRef, useState} from 'react';
// import {
//     EpubViewer,
//     ReactEpubViewer
//   } from 'react-epub-viewer'

// function EpubReader() {
//     const [bookUrl, setBookUrl] = useState(null);
//     const viewerRef = useRef(null);
//     const handleViewerReady = (viewer) => {
//         // Force the viewer to navigate to the first page of the book
//         viewer.goToPage(1);
//       };

//       const handleFileUpload = (event) => {
//         const file = event.target.files[0];
    
//         // Check that the file is an ePub book
//         if (file.type !== 'application/epub+zip') {
//           alert('Please select an ePub book');
//           return;
//         }
    
//         // Read the file and set the URL for the EpubViewer component
//         const reader = new FileReader();
//         reader.onload = (e) => {
//           setBookUrl(e.target.result);
//         };
//         reader.readAsDataURL(file);
//       };
      

// return (
//     <div>
//       <input type="file" accept=".epub" onChange={handleFileUpload} />
      
//         {console.log(bookUrl)}
//       {bookUrl && <ReactEpubViewer url={bookUrl} ref={viewerRef}/>}
      
//     </div>
//   );

// }

// export default EpubReader;









import React, { useState } from 'react'
import { ReactReader } from 'react-reader'
import book from '../ai.epub';

const Upload = () => {

  // And your own state logic to persist state
  const [location, setLocation] = useState(null)
  const locationChanged = epubcifi => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi)
  }

  const [bookUrl, setBookUrl] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    // Check that the file is an ePub book
    if (file.type !== 'application/epub+zip') {
      alert('Please select an ePub book');
      return;
    }

    // Read the file and set the URL for the ReactReader component
    const reader = new FileReader();
    reader.onload = (e) => {
      setBookUrl(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    
    <div style={{ height: '100vh' }}>
      {/* <input type="file" accept=".epub" onChange={handleFileUpload} />
      {bookUrl && <ReactReader locationChanged={locationChanged}  url={bookUrl}  />} */}
      <ReactReader
        location={location}
        locationChanged={locationChanged}
        url={book}
      />
     
    </div>
  )
}

export default Upload;
















// import React, {useState} from 'react'
// import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// import PDFDocument from 'pdfkit';
// import blobStream from 'blob-stream';



// import React, {useState} from "react"
// import ePub from 'epubjs';

// function EpubReader({ bookUrl }) {
//   const [book, setBook] = useState(null);

//   const loadBook = async () => {
//     const newBook = await ePub(bookUrl);
//     setBook(newBook);
//   };

//   const renderBook = () => {
//     if (!book) {
//       return <p>Loading...</p>;
//     }

//     return (
//       <div>
//         <h1>{book.metadata.bookTitle}</h1>
//         {book.flow.map((chapter, index) => (
//           <div key={index}>
//             <h2>{chapter.title}</h2>
//             <div
//               dangerouslySetInnerHTML={{
//                 __html: book.chapter(chapter.href).html,
//               }}
//             />
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div>
//       <button onClick={loadBook}>Load Book</button>
//       {renderBook()}
//     </div>
//   );
// }

// export default EpubReader;


// import React from "react"


// function Upload() {
//     const [fileContents, setFileContents] = useState('');
//     const [book, setBook] = useState(null);
    

//     const handleFileUpload = (event) => {
//         const file = event.target.files[0];
        
    
//         if (file) {
//           const reader = new FileReader();
    
//           reader.onload = (event) => {
//             const contents = event.target.result;
//             setFileContents(contents);
//           };
    
//           reader.readAsText(file);
//         }
//       };
    
//   return (
//     <div class="upload">
//         <input type="file" onChange={handleFileUpload} />
//         <SyntaxHighlighter className="contents" language="plaintext" style={docco}>
//       {fileContents}
//     </SyntaxHighlighter>
//     </div>
//   )
// }

// export default Upload;



