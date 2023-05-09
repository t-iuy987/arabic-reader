import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import './App.css';
import './styles/sidebar.css'
import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Explore from "./components/Explore.js"
import Footer from "./components/Footer.js";
import Sidebar from "./components/Sidebar.js";
import Upload from "./pages/Upload"
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="container p-0 g-0 ml-0 mr-0"> {/*<div className="container p-0 g-0 ml-0 mr-0"></div>*/}
      {/* <Header/>
      <Navbar />
      <Hero/>
      <Explore/>
      <Footer/> */}
    
      {/* <Main/> */}
      <Router>
      <Sidebar/>
      <Routes>
        {/* <Route path='/upload' Component={Upload} props = {""}/> */}

      </Routes>


      </Router>
      
    </div>
  );
}

export default App;
