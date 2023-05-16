import React, { Component, useEffect, useState } from "react";
import Sidebar from "./Sidebar";

export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "/Login";
  };
  return (
        <div>
          
                   < Sidebar/> 
          {/* <Route path="/upload" element={<UploadBook />} />
          <Route path="/booksList" element={<BookList />} />
          <Route path="/displayBook/:id" element={<DisplayBook />} /> */}
          <br />
          <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button>
        </div>
  );
}