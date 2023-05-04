import React from "react";
//import { Navbar, Nav } from 'react-bootstrap';
import logo from "../images/logo.jpeg";

export default function Header() {
  return (
    <header className="header p-3 position-absolute start-0 top-0 end-0">
      <div class="d-flex justify-content-between align-items-center">
        <a href="/" className="text-decoration-none text-white fs-5 fw-bold">
          Arabic Reader
        </a>
        <div>
          <button
            className="navbar-toggler text-white "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}


