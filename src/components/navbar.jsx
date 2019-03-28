import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

/**
 * Importing @Styles and @Images
 */
import "../assets/css/bootstrap.min.css"
import "../assets/css/font-awesome.min.css"
import "../assets/css/owl.carousel.css"
import "../assets/css/style.css"
import "../assets/css/animate.css"
import logo from "../assets/img/logo.png"
import bag from "../assets/img/icons/bag.png"
import search from "../assets/img/icons/search.png"

export default class Navbar extends Component {
  render() {
    return (
      <div className="header-section header-normal">
        <div className="container-fluid">
          <div className="site-logo">
            <h5 style={{ color: "#ffffff" }}>SHOPMATE</h5>
          </div>
          <div className="nav-switch">
            <i className="fa fa-bars"></i>
          </div>
          <div className="header-right">
            <Link to="cart" className="card-bag">
              <img src={bag} alt="" /><span>2</span>
            </Link>
            <a href="#" className="search"><img src={search} alt="" /></a>
          </div>
          <ul className="main-menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="#">Woman</a></li>
            <li><a href="#">Man</a></li>
            <li><a href="#">LookBook</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
