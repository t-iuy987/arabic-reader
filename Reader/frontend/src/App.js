import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import './styles/sidebar.css'

import UploadBook from './components/UploadBook';
import BookList from "./components/BookList";
import DisplayBook from "./components/DisplayBook";
import JoinNow from './components/JoinNow';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import {Routes, Route } from 'react-router-dom';
import UserHome from './components/UserHome';
import UserDetails from './components/UserDetails';
import Logout from './components/Logout';
//import Footer from './components/Footer';
import { BookContextProvider } from './components/BookContext';


function App() {
  return (
    <div className="container p-0 g-0 ml-0 mr-0"> {/*<div className="container p-0 g-0 ml-0 mr-0"></div>*/}
     <BookContextProvider>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/join" element={<SignUp/>}/>
          <Route path="/udetail" element={<UserDetails/>}/>
          <Route path="/uhome" element={<UserHome/>}/>
          <Route path="/logout" element={<Logout/>}/>



          <Route path="/upload" element={<UploadBook/>}/>
          <Route path="/booksList" element={<BookList/>}/>
          <Route path="/displayBook/:id" element={<DisplayBook/>}/>

          

        {/* < Sidebar/> */}
          {/* <Route path="/upload" element={<UploadBook />} />
          <Route path="/booksList" element={<BookList />} />
          <Route path="/displayBook/:id" element={<DisplayBook />} /> */}
          
        </Routes>
        </BookContextProvider>
      

    </div>
  );
}

export default App;
