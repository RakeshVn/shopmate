import React, { Component } from 'react';
import "../assets/css/bootstrap.min.css"
import "../assets/css/font-awesome.min.css"
import "../assets/css/owl.carousel.css"
import "../assets/css/style.css"
import "../assets/css/animate.css"
import product1 from "../assets/img/products/1.jpg"
import product2 from "../assets/img/products/2.jpg"
import product3 from "../assets/img/products/3.jpg"
import product4 from "../assets/img/products/4.jpg"
import eye from "../assets/img/icons/eye.png"
import heart from "../assets/img/icons/heart.png"

export default class Products extends Component {
    render() {
        return (
            <div className="product-section spad">
                <div className="container">
                    <ul className="product-filter controls">
                        <li className="control" data-filter=".new">New arrivals</li>
                        <li className="control" data-filter="all">Recommended</li>
                        <li className="control" data-filter=".best">Best sellers</li>
                    </ul>
                    <div className="row" id="product-filter">
                        <div className="mix col-lg-3 col-md-6 best">
                            <div className="product-item">
                                <figure>
                                    <img src={product1} alt="" />
                                    <div className="pi-meta">
                                        <div className="pi-m-left">
                                            <img src={eye} alt="" />
                                            <p>quick view</p>
                                        </div>
                                        <div className="pi-m-right">
                                            <img src={heart} alt="" />
                                            <p>save</p>
                                        </div>
                                    </div>
                                </figure>
                                <div className="product-info">
                                    <h6>Long red Shirt</h6>
                                    <p>$39.90</p>
                                    <a href="#" className="site-btn btn-line">ADD TO CART</a>
                                </div>
                            </div>
                        </div>
                        <div className="mix col-lg-3 col-md-6 new">
                            <div className="product-item">
                                <figure>
                                    <img src={product2} alt="" />
                                    <div className="bache">NEW</div>
                                    <div className="pi-meta">
                                        <div className="pi-m-left">
                                            <img src={eye} alt="" />
                                            <p>quick view</p>
                                        </div>
                                        <div className="pi-m-right">
                                            <img src={heart} alt="" />
                                            <p>save</p>
                                        </div>
                                    </div>
                                </figure>
                                <div className="product-info">
                                    <h6>Hype grey shirt</h6>
                                    <p>$19.50</p>
                                    <a href="#" className="site-btn btn-line">ADD TO CART</a>
                                </div>
                            </div>
                        </div>
                        <div className="mix col-lg-3 col-md-6 best">
                            <div className="product-item">
                                <figure>
                                    <img src={product3} alt="" />
                                    <div className="pi-meta">
                                        <div className="pi-m-left">
                                            <img src={eye} alt="" />
                                            <p>quick view</p>
                                        </div>
                                        <div className="pi-m-right">
                                            <img src={heart} alt="" />
                                            <p>save</p>
                                        </div>
                                    </div>
                                </figure>
                                <div className="product-info">
                                    <h6>long sleeve jacket</h6>
                                    <p>$59.90</p>
                                    <a href="#" className="site-btn btn-line">ADD TO CART</a>
                                </div>
                            </div>
                        </div>
                        <div className="mix col-lg-3 col-md-6 new best">
                            <div className="product-item">
                                <figure>
                                    <img src={product4} alt="" />
                                    <div className="bache sale">SALE</div>
                                    <div className="pi-meta">
                                        <div className="pi-m-left">
                                            <img src={eye} alt="" />
                                            <p>quick view</p>
                                        </div>
                                        <div className="pi-m-right">
                                            <img src={heart} alt="" />
                                            <p>save</p>
                                        </div>
                                    </div>
                                </figure>
                                <div className="product-info">
                                    <h6>Denim men shirt</h6>
                                    <p>$32.20 <span>RRP 64.40</span></p>
                                    <a href="#" className="site-btn btn-line">ADD TO CART</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
