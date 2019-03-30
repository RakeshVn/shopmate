import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Importing @Styles and @Images
 */
import "../assets/css/bootstrap.min.css"
import "../assets/css/font-awesome.min.css"
import "../assets/css/owl.carousel.css"
import "../assets/css/style.css"
import "../assets/css/animate.css"
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
            <Link to="#" className="search"><img src={search} alt="" /></Link>
          </div>
          <ul className="main-menu">
            <li><Link to="">Home</Link></li>
            <li><Link to="">Woman</Link></li>
            <li><Link to="">Man</Link></li>
            <li><Link to="">LookBook</Link></li>
            <li><Link to="">Blog</Link></li>
            <li><Link to="">Contact</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
