import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideBars from "./SideBars";
import { RiArrowDownSLine } from "react-icons/ri";

export default function Appbar({
  openBooksList,
  toggleSidebar,
  changeTheme,
  changeFontSize,
  openSearch,
  selectedText,
  updateBookmarkContent,
  sidebarContent,
  onSearch,
  fontSize,
}) {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isBookmarkDropdownOpen, setIsBookmarkDropdownOpen] = useState(false);
  const [isContentClicked, setIsContentClicked] = useState(false);
  const [isBookmarkClicked, setIsBookmarkClicked] = useState(false);
  const [bookmarkContent, setBookmarkContent] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const toggleContentDropdown = () => {
    setIsContentClicked(!isContentClicked);
  };

  const toggleBookmark = () => {
    setIsBookmarkClicked(!isBookmarkClicked);
    updateBookmarkContent();
  };

  const toggleBookmarkDropdown = () => {
    setIsBookmarkDropdownOpen(!isBookmarkDropdownOpen);
  };
  const toggleSearchInput = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const handleHover = (buttonName) => {
    setHoveredButton(buttonName);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };
  const handleSearch = () => {
    onSearch(searchText);
  };

  const getButtonName = (buttonName) => {
    switch (buttonName) {
      case "booksList":
        return "Books";
      case "sidebar":
        return "Content";
      case "bookmark":
        return "Bookmark";
      case "search":
        return "Search";
      default:
        return "";
    }
  };

  return (
    <div
      className="appbar"
      style={{
        backgroundColor: "#7cbcd1",
        display: "flex",
        justifyContent: "center",
        zIndex: "1",
      }}
    >
      <span
        style={{
          height: "inherit",
          backgroundColor: "gray",
          border: "0.1px solid #d3d3d3",
          margin: "0px",
        }}
      ></span>
      <Link to="/booksList">
        <button
          className="btn btn-link"
          onClick={openBooksList}
          onMouseOver={() => handleHover("booksList")}
          onMouseLeave={handleMouseLeave}
          style={{ color: "black", margin: "5px" }}
        >
          <i class="bi bi-journals"></i>
          {hoveredButton === "booksList" && (
            <div
              className="popup"
              style={{
                position: "absolute",
                top: "42px",
                border: "2px solid #202123",
                right: "63.5%",
                backgroundColor: "#202123",
                color: "white",
                fontSize: "13px",
                padding: "8px",
                fontWeight: "500",
              }}
            >
              {getButtonName("booksList")}
            </div>
          )}
        </button>
      </Link>
      <span
        style={{
          height: "inherit",
          backgroundColor: "gray",
          border: "0.1px solid #d3d3d3",
          margin: "0px",
        }}
      ></span>

      <button
        className="btn btn-link"
        onClick={toggleSidebar}
        onMouseOver={() => handleHover("sidebar")}
        onMouseLeave={handleMouseLeave}
        style={{ color: "black" }}
      >
        <i className="bi bi-list"></i>
        {hoveredButton === "sidebar" && (
          <div
            className="popup"
            style={{
              position: "absolute",
              top: "42px",
              border: "2px solid #202123",
              right: "59%",
              backgroundColor: "#202123",
              color: "white",
              fontSize: "13px",
              padding: "8px",
              fontWeight: "500",
            }}
          >
            {getButtonName("sidebar")}
          </div>
        )}
      </button>

      <span
        style={{
          height: "inherit",
          backgroundColor: "gray",
          border: "0.1px solid #d3d3d3",
          margin: "0px",
        }}
      ></span>

      <div className="btn-group" role="group">
        <span
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "13px",
            color: "black",
            marginRight: "4px",
          }}
        >
          Theme
        </span>
        <button
          className="btn btn-link px-1"
          onClick={() => changeTheme("white")}
        >
          <div
            style={{
              borderRadius: "50%",
              backgroundColor: "#fff",
              height: "13px",
              width: "13px",
              border: "2px solid #fff",
            }}
          ></div>
        </button>
        <button
          className="btn btn-link px-1"
          onClick={() => changeTheme("black")}
        >
          <div
            style={{
              borderRadius: "50%",
              backgroundColor: "black",
              height: "13px",
              width: "13px",
              border: "2px solid black",
            }}
          ></div>
        </button>
        <button
          className="btn btn-link px-1"
          onClick={() => changeTheme("pink")}
        >
          <div
            style={{
              borderRadius: "50%",
              backgroundColor: "pink",
              height: "13px",
              width: "13px",
              border: "2px solid pink",
            }}
          ></div>
        </button>
        <span
          style={{
            height: "inherit",
            backgroundColor: "gray",
            border: "0.001px solid #d3d3d3",
            margin: "0px",
          }}
        ></span>
      </div>

      <div className="btn-group" role="group">
        <span
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "13px",
            color: "black",
          }}
        >
          Font Size
        </span>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            className="btn btn-link px-1"
            onClick={() => changeFontSize(true)}
            style={{
              position: "relative",
              borderRadius: "50%",
              backgroundColor: "lightblue",
              height: "15px",
              width: "15px",
              border: "0.5px solid gray",
              color: "gray",
              fontWeight: "700",
              fontSize: "16px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "48%",
                left: "-70%",
                transform: "translate(-50%, -50%)",
              }}
            >
              +
            </span>
          </button>
          <div style={{ color: "#000", fontSize: "12px" }}>{fontSize}</div>
          <button
            className="btn btn-link px-1"
            onClick={() => changeFontSize(false)}
            style={{
              position: "relative",
              borderRadius: "50%",
              backgroundColor: "lightblue",
              height: "15px",
              width: "15px",
              border: "0.5px solid gray",
              color: "gray",
              fontWeight: "900",
              fontSize: "16px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "40%",
                left: "-70%",
                transform: "translate(-50%, -50%)",
              }}
            >
              -
            </span>
          </button>
        </div>
        <span
          style={{
            height: "inherit",
            backgroundColor: "gray",
            border: "0.1px solid #d3d3d3",
            margin: "0px",
          }}
        ></span>
      </div>

      <button
        className="btn btn-link"
        onMouseOver={() => handleHover("bookmark")}
        onMouseLeave={handleMouseLeave}
        style={{
          // Change the color based on isBookmarkClicked state
          color: isBookmarkClicked ? "red" : "black",
          fill: isBookmarkClicked ? "red" : "black",
        }}
        onClick={toggleBookmark}
      >
        {isBookmarkClicked ? (
          <i className="bi bi-bookmark-fill" style={{ color: "red" }}></i>
        ) : (
          <i className="bi bi-bookmark"></i>
        )}
        <RiArrowDownSLine
          onClick={toggleBookmarkDropdown}
          style={{
            cursor: "pointer",
            color: "black",
            fontSize: "12px",
          }}
        />
        {hoveredButton === "bookmark" && (
          <div
            className="popup"
            style={{
              position: "absolute",
              top: "42px",
              right: "34%",
              border: "2px solid #202123",
              backgroundColor: "#202123",
              color: "white",
              fontSize: "13px",
              padding: "8px",
              fontWeight: "500",
            }}
          >
            {getButtonName("bookmark")}
          </div>
        )}
        {isBookmarkDropdownOpen && (
          <div className="bookmark-dropdown">
            <div className="bookmark-content">
            <p style={{color:"gray",fontSize:"15px",fontWeight:"600"}}>BookMark</p>
              {sidebarContent.map((content, index) => (
                <div key={index}>
                  {content} 
                  {/* {index !== sidebarContent.length - 1 && <hr />} */}
                </div>
              ))}
            </div>
          </div>
        )}
      </button>
      <span
        style={{
          height: "inherit",
          backgroundColor: "gray",
          border: "0.1px solid #d3d3d3",
          margin: "0px",
        }}
      ></span>
      <button
        className="btn btn-link"
        onClick={toggleSearchInput}
        onMouseOver={() => handleHover("search")}
        onMouseLeave={handleMouseLeave}
        style={{ color: "black" }}
      >
        <i className="bi bi-search"></i>
        {hoveredButton === "search" && (
          <div
            className="popup"
            style={{
              position: "absolute",
              top: "42px",
              border: "2px solid #202123",
              right: "31%",
              backgroundColor: "#202123",
              color: "white",
              fontSize: "13px",
              padding: "8px",
              fontWeight: "500",
            }}
          >
            {getButtonName("search")}
          </div>
        )}
      </button>

      <span
        style={{
          height: "inherit",
          backgroundColor: "gray",
          border: "0.1px solid #d3d3d3",
          margin: "0px",
        }}
      ></span>
      {isSearchOpen && (
        <div className="search-container search-animation">
          <input
            type="text"
            placeholder="Search in book..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ fontSize: "12px", border: "none" }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      )}
    </div>
  );
}
