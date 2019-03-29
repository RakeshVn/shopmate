import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import "../assets/css/bootstrap.min.css"
import "../assets/css/font-awesome.min.css"
import "../assets/css/owl.carousel.css"
import "../assets/css/style.css"
import "../assets/css/animate.css"
import bg from "../assets/img/bg.jpg"
import slider from "../assets/img/slider-img.png"

export default class Slider extends Component {
    render() {
        return (
            <section className="hero-section set-bg" style={{ backgroundImage: bg }}>
                <div className="hero-slider owl-carousel">
                    <div className="hs-item">
                        <div className="hs-left">
                            <img src={slider} alt="" /></div>
                        <div className="hs-right">
                            <div className="hs-content">
                                <div className="price">from $19.90</div>
                                <h2><span>2018</span> summer collection</h2>
                                <Link to="" className="site-btn">Shop NOW!</Link>
                            </div>
                        </div>
                    </div>
                    <div className="hs-item">
                        <div className="hs-left">
                            <img src={slider} alt="" /></div>
                        <div className="hs-right">
                            <div className="hs-content">
                                <div className="price">from $19.90</div>
                                <h2><span>2018</span> summer collection</h2>
                                <Link to="" className="site-btn">Shop NOW!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
