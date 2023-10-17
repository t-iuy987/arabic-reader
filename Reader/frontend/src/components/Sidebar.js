import React, {useState} from "react"

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import UploadBook from './UploadBook';

import { SidebarData } from "./SidebarData"
import {Link, Route, Routes} from 'react-router-dom';

export default function Sidebar({userData})
{
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar (!sidebar);

    return(
        <>
        <div className="sidebar">
            <Link to="#" className="menu-bars">
                <MenuIcon onClick={showSidebar}/>
            </Link>

        </div>
        <nav className={sidebar ? 'side-menu active' : 'side-menu'}>
            <ul className="side-menu-items"  onClick={showSidebar}>
                
                <li className="sidebar-toggle">
                    <Link to="#" className="menu-bars">
                    <CloseIcon/>
                    </Link>
                </li>
                {console.log("here")}
                <li><div className="user-info">
                    <PersonIcon className="user-icon" style={{fontSize:70}}/>
                    <p className="side-text user">Hi {userData.fname}</p>
                    
                    </div></li>
               
                {SidebarData.map((item, index) =>{
                    return(
                        <li key = {index} className = {item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>

                    );
                })}

            </ul>
        </nav>
        </>
    )
    // return(
    //     <div className="sidebar">
    //         <ul className= "sidebar-list">
    //         {SidebarData.map((val, key)=>{
    //             return(
    //                 <li key={key} 
    //                 className = "row"
    //                 id={window.location.pathname == val.link ? "active" :"" }
    //                 onClick={()=> {window.location.pathname = val.link}}>
    //                     {" "}
    //                      <div id="icon">{val.icon}</div> 
    //                      {" "}
    //                      <div id="title"> {val.title}</div>
    //                 </li>
    //             )
    //         })}
    //         </ul>

    //     </div>
    // );

}



   