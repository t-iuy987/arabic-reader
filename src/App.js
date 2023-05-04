import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import './App.css';
import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Explore from "./components/Explore.js"


function App() {
  return (
    <div className="container p-0 g-0 ml-0 mr-0">
      <Header/>
      <Navbar />
      <Hero/>
      <Explore/>
    
      {/* <Main/> */}
      
    </div>
  );
}

export default App;
