import React from 'react'
import Header from "../components/Header";
import Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";
import Explore from "../components/Explore.js"
import Footer from "../components/Footer.js";


function HomePage() {
  return (
    <>
        <Header/>
      <Navbar />
      <Hero/>
      <Explore/>
      <Footer/>

    </>
  )
}

export default HomePage
