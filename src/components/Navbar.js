import React from "react";

export default function Navbar() {
  return (
    <nav id="navbar" className="collapse navbar-collapse dropdown-nav__closeBtnNav" >
      <div className="dropdown-nav__container container-xxl d-flex   align-items-start align-items-center">
        <div class="row align-items-start">
            
            <div class="col-12 col-sm-4 mt-4 ">
                <a href="#" className="row text-decoration-none">
                    <div className="col-2 col-sm-12 mb-4">
                        <img src={require('../images/about-us.jpg')} width="300" height="300" className="img-fluid" loading="lazy"/>
                    </div>
                    <div className="col-10">
                        <h3>Amazing Flavour</h3>
                        <p>FInd amazing flaour</p>
                        <p>Learn more <i className="bi bi-arrow-right"></i></p>
                    </div>
                </a>
            </div>

            <div class="col-12 col-sm-4 mt-4 ">
                <a href="#" className="row text-decoration-none">
                    <div className="col-2 col-sm-12 mb-4">
                        <img src={require('../images/about-us.jpg')} width="300" height="300" className="img-fluid" loading="lazy"/>
                    </div>
                    <div className="col-10">
                        <h3>Amazing Flavour</h3>
                        <p>FInd amazing flaour</p>
                        <p>Learn more <i className="bi bi-arrow-right"></i></p>
                    </div>
                </a>
            </div>

            <div class="col-12 col-sm-4 mt-4 ">
                <a href="#" className="row text-decoration-none">
                    <div className="col-2 col-sm-12 mb-4">
                        <img src={require('../images/about-us.jpg')} width="300" height="300" className="img-fluid" loading="lazy"/>
                    </div>
                    <div className="col-10">
                        <h3>Amazing Flavour</h3>
                        <p>FInd amazing flaour</p>
                        <p>Learn more <i className="bi bi-arrow-right"></i></p>
                    </div>
                </a>
            </div>

            
        </div>
      <button
        className="navbar-toggler dropdown-nav__closeBtnNav align-self-start"
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
          className="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
      </div>
    </nav>
  );
}
