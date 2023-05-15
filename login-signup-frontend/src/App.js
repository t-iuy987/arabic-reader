import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import ImageUpload from "./components/imageUpload.";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const backgroundImage = "https://res.cloudinary.com/dhqirsoqg/image/upload/v1684184601/394862_qz2epx.jpg"
  return (
    <Router>
      
      <div className="App" 
     
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
     
     >
      <h1
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "2rem",
            paddingTop: "20px",
          }}
        >
          Arabic Reader With Integrated Root-Based Dictionary
        </h1>
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
          />
          <Route path="/log-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
  );
}

export default App;
