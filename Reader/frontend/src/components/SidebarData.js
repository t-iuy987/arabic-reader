import React from "react"
import HomeIcon from '@mui/icons-material/Home';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import BookIcon from '@mui/icons-material/Book';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LogoutIcon from '@mui/icons-material/Logout';
export const SidebarData = [
    {
        title: "Upload Book",
        icon: <UploadFileIcon/>,
        path: "/upload",
        cName: "side-text upload-btn"
    },
    {
        title: "My Books",
        icon: <BookIcon/>,
        path: "/booksList",
        cName: "side-text"
    },
    // {
    //     title: "Favourite Words",
    //     icon: <FavoriteBorderIcon/>,
    //     path: "/",
    //     cName: "side-text"
    // },
    // {
    //     title: "Bookmarks",
    //     icon: <BookmarkBorderIcon/>,
    //     path: "/",
    //     cName: "side-text"
    // },
    {
        title: "Logout",
        icon: <LogoutIcon/>,
        path: "/logout",
        cName: "side-text user-logout"
    }
  
]

   
