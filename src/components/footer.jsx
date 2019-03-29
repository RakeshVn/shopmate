import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "../assets/css/bootstrap.min.css"
import "../assets/css/font-awesome.min.css"
import "../assets/css/owl.carousel.css"
import "../assets/css/style.css"
import "../assets/css/animate.css"
import cards1 from "../assets/img/cards/1.png"
import cards2 from "../assets/img/cards/2.png"
import cards3 from "../assets/img/cards/3.png"
import cards4 from "../assets/img/cards/4.png"
import cards5 from "../assets/img/cards/5.png"
import logo from "../assets/img/logo.png"

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-top-section home-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-8 col-sm-12">
                            <div className="footer-widget about-widget">
                                <img src={logo} className="footer-logo" alt="" />
                                <p>Donec vitae purus nunc. Morbi faucibus erat sit amet congue mattis. Nullam fringilla faucibus urna, id
							dapibus erat iaculis ut. Integer ac sem.</p>
                                <div className="cards">
                                    <img src={cards1} alt="" />
                                    <img src={cards2} alt="" />
                                    <img src={cards3} alt="" />
                                    <img src={cards4} alt="" />
                                    <img src={cards5} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="footer-widget">
                                <h6 className="fw-title">usefull Links</h6>
                                <ul>
                                    <li><Link to="#">Partners</Link></li>
                                    <li><Link to="#">Bloggers</Link></li>
                                    <li><Link to="#">Support</Link></li>
                                    <li><Link to="#">Terms of Use</Link></li>
                                    <li><Link to="#">Press</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="footer-widget">
                                <h6 className="fw-title">Sitemap</h6>
                                <ul>
                                    <li><Link to="#">Partners</Link></li>
                                    <li><Link to="#">Bloggers</Link></li>
                                    <li><Link to="#">Support</Link></li>
                                    <li><Link to="#">Terms of Use</Link></li>
                                    <li><Link to="#">Press</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="footer-widget">
                                <h6 className="fw-title">Shipping & returns</h6>
                                <ul>
                                    <li><Link to="#">About Us</Link></li>
                                    <li><Link to="#">Track Orders</Link></li>
                                    <li><Link to="#">Returns</Link></li>
                                    <li><Link to="#">Jobs</Link></li>
                                    <li><Link to="#">Shipping</Link></li>
                                    <li><Link to="#">Blog</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="footer-widget">
                                <h6 className="fw-title">Contact</h6>
                                <div className="text-box">
                                    <p>Your Company Ltd </p>
                                    <p>1481 Creekside Lane Avila Beach, CA 93424, </p>
                                    <p>+53 345 7953 32453</p>
                                    <p>office@youremail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
