import React from "react";

export default function Explore() {
  return (
    <div>
    <section className="explore container-custom">
      <a id="scroll-down"></a>
      <div className="row">
        <div className="col-12 col-sm-6 d-flex justify-content-between ">
          <img
            src={require("../images/hero-img.jpg")}
            className="img-fluid explore__section-thumbnail"
            alt="Definitions and Meanings"
            loading="lazy"
          ></img>
        </div>
        <div className="col-12 col-sm-6 align-self-center ">
          <div className="explore__content-width ">
           
            <h1 className="h2 mb-4 ">Root-Based Search</h1>
            <p className="mv-4">
            Our Arabic Reader comes with an integrated root-based dictionary, which means that users can search for any word based on its root letters. This feature allows users to expand their vocabulary and improve their Arabic reading skills by easily discovering new words and their meanings.
            </p>
            {/* <a href="#">
              Read More<i className="bi bi-arrow-right"></i>
            </a> */}
          </div>
        </div>
      </div>
    </section>




    <section className="explore explore___background">
        <div className="container-custom">
      <a id="scroll-down"></a>
      <div className="row">
        <div className="col-12 col-sm-6 d-flex justify-content-between order-sm-1">
          <img
            src={require("../images/hero-img4.jpg")}
            className="img-fluid explore__section-thumbnail"
            alt="Definitions and Meanings"
            loading="lazy"
          ></img>
        </div>
        <div className="col-12 col-sm-6 align-self-center ">
          <div className="explore__content-width ">
            
            <h1 className="h2 mb-4 ">Standalone Root-Based Dictionary Web Service</h1>
            <p className="mv-4">
            The root-based dictionary utilized in our Arabic Reader can  be accessed as a standalone web service, providing developers with a powerful and flexible API for use in a variety of applications. This feature allows for seamless integration of our dictionary into other software projects, enabling developers to leverage the benefits of our cutting-edge Arabic language processing technology to enhance the functionality of their own applications.
            </p>
            {/* <a href="#">
              Read More<i className="bi bi-arrow-right"></i>
            </a> */}
          </div>
        </div>
      </div>
      </div>
    </section>



    </div>
  );
}
