import React, { useState } from 'react'
import bookService from '../services/bookService';

import { ReactReader } from 'react-reader'

import axios from 'axios';
function UploadBook(){

  // And your own state logic to persist state
  const [location, setLocation] = useState(null);
const [date, setDate] = useState('')
const [book, setBook] = useState('')
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

  const onSubmit = (e) => {
    e.preventDefault();
    
}
const handleSubmit = async(event)=>{
  event.preventDefault();
  const formData = new FormData();
    formData.append("date", date);
    formData.append("book", book);
    
     const response = await bookService.create(formData);
     console.log(response);
     event.target.reset();

    

}

  return (
    <>
    <h1>Upload Book</h1>
    <form onSubmit={handleSubmit}>
          <div class="custom-file mb-10">
          <input type="date" name="date" id="date"   onChange={event =>setDate(event.target.value)} required/>
          {/* value={new Date().toLocaleDateString()} */}
            <input type="file" name="book"  class="custom-file-input" onChange={event =>setBook(event.target.files[0])} required/>
            <label for="file" className="custom-file-label">Choose File</label>
          </div>
          <input type="submit" value="Submit" class="btn btn-primary btn-block"/>
        </form>
        </>
    
    // <div style={{ height: '100vh' }}>
    //   {/* <input type="file" accept=".epub" onChange={handleFileUpload} />
    //   {bookUrl && <ReactReader locationChanged={locationChanged}  url={bookUrl}  />} */}
    //   <ReactReader
    //     location={location}
    //     locationChanged={locationChanged}
    //     url={book}
    //   />
    // </div>
  )
}

export default UploadBook;
