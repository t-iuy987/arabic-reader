import React from "react";
import { Link } from "react-router-dom";

export default function Hero()
{
    function openJoinPage()
    {
        window.open("/join")
    }
    return(
        <section className="hero">
            <div className="hero__overlay"></div>
            <img src={require('../images/hero-img1.jpg')} className="img-fluid hero-img"/>


<div className="hero__content  h-100 container-custom position-relative">
    <div className="d-flex h-100 align-items-center hero__content-width">
        <div className="text-white ">
            <h1 className="fw-bold mb-4">Unlock the Power of Arabic Reading with our Integrated Root-Based Dictionary</h1>
            <p className="lead mb-4">Welcome to our innovative online platform that takes Arabic reading to the next level. 
            Say goodbye to the frustration of searching for definitions and meanings while reading, and experience a more efficient and effective way to improve your Arabic language skills. 
            Join our community of avid readers and discover the joy of unlocking the true potential of Arabic literature.</p>
            <Link to="/join">

            <a href="#"  className="mt-2 btn btn-lg btn-outline-light" role="button">Join Now</a></Link>

        </div>
    </div>
</div>
<a href="#scroll-down" className="hero__scroll-btn">Explore<i className="bi bi-arrow-down"></i></a>
        </section>

    )
}