import React, {useState} from "react"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { SidebarData } from "./SidebarData"
import {Link} from 'react-router-dom';

export default function Sidebar()
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
        <nav className={sidebar?'side-menu active' : 'side-menu'}>
            <ul className="side-menu-items"  onClick={showSidebar}>
                
                <li className="sidebar-toggle">
                    <Link to="#" className="menu-bars">
                    <CloseIcon/>
                    </Link>
                </li>
                <li className="side-text user">{"Hi User!" }</li>
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



   