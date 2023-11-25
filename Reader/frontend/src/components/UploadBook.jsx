import React, { useState , useEffect} from "react";
import { Link, Route, Routes } from "react-router-dom";

import bookService from "../services/bookService";
import "../styles/uploadFile.css";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
const jwtD = require("jwt-decode");

function UploadBook() {
  // And your own state logic to persist state
  const [location, setLocation] = useState(null);
  const [user, setUser] = useState("");
  const [title, setTitle] = useState("");
  const [favWords, setFavouriteWords] = useState("");
  const [book, setBook] = useState("");
  const [userData, setUserData] = useState("");

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


  const [bookUrl, setBookUrl] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    // Check that the file is an ePub book
    if (file.type !== "application/epub+zip") {
      alert("Please select an ePub book");
      return;
    }

    // Read the file and set the URL for the ReactReader component
    const reader = new FileReader();
    reader.onload = (e) => {
      setBookUrl(e.target.result);
    };
    reader.readAsDataURL(file);
  };


  function getUser(){
    const usr = userData.email;
    setUser(usr);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    getUser();
    setFavouriteWords([]);
    const formData = new FormData();
    formData.append("user", user);
    formData.append("title", title);
    formData.append("favWords", favWords);
    formData.append("book", book);

    const response = await bookService.create(formData);
    console.log(response);
    // Storing bookId in local storage
    localStorage.setItem("bookTitle", title);
    alert("Book Succesfully Uploaded!")
    event.target.reset();
  };

  return (
    <>
    <Sidebar  userData={userData}/>
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="custom-file mb-10 card">
          <h3>Upload Book</h3>
          <div className="drop_box">
            <header>
              <h4>Select File here</h4>
            </header>
            <p>Files Supported: TEXT</p>
            
            <input
              type="file"
              name="book"
              className="form-control custom-file-input mb-3"
              id="formFile"
              onChange={(event) => setBook(event.target.files[0])}
              required
            />
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="mybook.txt"
              onChange={(event) => setTitle(event.target.value)}
              required
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary btn-block"
          />
        </div>
      </form>
      <Footer />
    </>

  );
}

export default UploadBook;
