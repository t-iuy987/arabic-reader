import React, { useEffect, useState } from "react";
import {Link, Route, Router} from 'react-router-dom'
import Sidebar from "./Sidebar";
import Login from "./Login";
import Footer from "./Footer";

export default function UserHome({ userData }) {

  return (
        <div style={{backgroundColor:"white", height:"100vh"}}>
          
          <Sidebar userData={userData}/> 
          <div>
          Name<h1>{userData.fname}</h1>
          Email <h1>{userData.email}</h1>
          <br />
          

          
        </div>
       
        </div>
  );
}