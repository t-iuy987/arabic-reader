import React from "react";

export default function Explore() {
  return (
    <div>
    <section className="explore container-custom">
      <a id="scroll-down"></a>
      <div className="row">
        <div className="col-12 col-sm-6 d-flex justify-content-between ">
          <img
            src={require("../images/about-us.jpg")}
            className="img-fluid explore__section-thumbnail"
            alt="Definitions and Meanings"
            loading="lazy"
          ></img>
        </div>
        <div className="col-12 col-sm-6 align-self-center ">
          <div className="explore__content-width ">
            <span>01</span>
            <h1 className="h2 mb-4 ">Feature 01</h1>
            <p className="mv-4">
              Lorem ipsum dolar sit amt, lorem ipsum dolar sit amt,Lorem ipsum
              dolar sit amt,Lorem ipsum dolar sit amt,Lorem ipsum dolar sit amt,
              lorem ipsum dolar sit amt,Lorem ipsum dolar sit amt,Lorem ipsum
              dolar sit amt
            </p>
            <a href="#">
              Read More<i className="bi bi-arrow-right"></i>
            </a>
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
            src={require("../images/about-us.jpg")}
            className="img-fluid explore__section-thumbnail"
            alt="Definitions and Meanings"
            loading="lazy"
          ></img>
        </div>
        <div className="col-12 col-sm-6 align-self-center ">
          <div className="explore__content-width ">
            <span>02</span>
            <h1 className="h2 mb-4 ">Feature 02</h1>
            <p className="mv-4">
              Lorem ipsum dolar sit amt, lorem ipsum dolar sit amt,Lorem ipsum
              dolar sit amt,Lorem ipsum dolar sit amt,Lorem ipsum dolar sit amt,
              lorem ipsum dolar sit amt,Lorem ipsum dolar sit amt,Lorem ipsum
              dolar sit amt
            </p>
            <a href="#">
              Read More<i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>



    </div>
  );
}
