import React, { useEffect } from 'react'
import Login from "./Login";

function Logout() {
    useEffect(()=>{
        window.localStorage.clear();
        
    })
  return (
    <Login/>
  )
}

export default Logout
