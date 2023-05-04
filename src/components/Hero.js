import React from "react";

export default function Hero()
{
    return(
        <section className="hero">
            <div className="hero__overlay"></div>
            <img src={require('../images/hero-img3.jpg')} className="img-fluid hero-img"/>


<div className="hero__content  h-100 container-custom position-relative">
    <div className="d-flex h-100 align-items-center hero__content-width">
        <div className="text-white">
            <h1 className="fw-bold mb-4">Discover The Taste of your coffee</h1>
            <p className="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="#" className="mt-2 btn btn-lg btn-outline-light" role="button"> Buy Now</a>

        </div>
    </div>
</div>
<a href="#scroll-down" className="hero__scroll-btn">Explore<i className="bi bi-arrow-down"></i></a>
        </section>

    )
}