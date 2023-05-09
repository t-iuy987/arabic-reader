// import React, {useState} from 'react'
// import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// import PDFDocument from 'pdfkit';
// import blobStream from 'blob-stream';




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




// // function Upload() {
// //     const [fileContents, setFileContents] = useState('');
// //     const [book, setBook] = useState(null);
    

// //     const handleFileUpload = (event) => {
// //         const file = event.target.files[0];
        
    
// //         if (file) {
// //           const reader = new FileReader();
    
// //           reader.onload = (event) => {
// //             const contents = event.target.result;
// //             setFileContents(contents);
// //           };
    
// //           reader.readAsText(file);
// //         }
// //       };
    
// //   return (
// //     <div class="upload">
// //         <input type="file" onChange={handleFileUpload} />
// //         <SyntaxHighlighter className="contents" language="plaintext" style={docco}>
// //       {fileContents}
// //     </SyntaxHighlighter>
// //     </div>
// //   )
// // }

// // export default Upload;



