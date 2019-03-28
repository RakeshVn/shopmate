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
import Navbar from '../components/navbar';

export default class Categories extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div class="page-area categorie-page spad">
                    <div class="container">
                        <div class="categorie-filter-warp">
                            <p>Showing 12 results</p>
                            <div class="cf-right">
                                <div class="cf-layouts">
                                    <a href="#">
                                        <img src="img/icons/layout-1.png" alt="" />
                                    </a>
                                    <a class="active" href="#">
                                        <img src="img/icons/layout-2.png" alt="" />
                                    </a>
                                </div>
                                <form action="#">
                                    <select>
                                        <option>Color</option>
                                    </select>
                                    <select>
                                        <option>Brand</option>
                                    </select>
                                    <select>
                                        <option>Sort by</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="product-item">
                                    <figure>
                                        <img src="img/products/1.jpg" alt="" />
                                        <div class="pi-meta">
                                            <div class="pi-m-left">
                                                <img src="img/icons/eye.png" alt="" />
                                                <p>quick view</p>
                                            </div>
                                            <div class="pi-m-right">
                                                <img src="img/icons/heart.png" alt="" />
                                                <p>save</p>
                                            </div>
                                        </div>
                                    </figure>
                                    <div class="product-info">
                                        <h6>Long red Shirt</h6>
                                        <p>$39.90</p>
                                        <a href="#" class="site-btn btn-line">ADD TO CART</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="product-item">
                                    <figure>
                                        <img src="img/products/2.jpg" alt="" />
                                        <div class="bache">NEW</div>
                                        <div class="pi-meta">
                                            <div class="pi-m-left">
                                                <img src="img/icons/eye.png" alt="" />
                                                <p>quick view</p>
                                            </div>
                                            <div class="pi-m-right">
                                                <img src="img/icons/heart.png" alt="" />
                                                <p>save</p>
                                            </div>
                                        </div>
                                    </figure>
                                    <div class="product-info">
                                        <h6>Hype grey shirt</h6>
                                        <p>$19.50</p>
                                        <a href="#" class="site-btn btn-line">ADD TO CART</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="product-item">
                                    <figure>
                                        <img src="img/products/3.jpg" alt="" />
                                        <div class="pi-meta">
                                            <div class="pi-m-left">
                                                <img src="img/icons/eye.png" alt="" />
                                                <p>quick view</p>
                                            </div>
                                            <div class="pi-m-right">
                                                <img src="img/icons/heart.png" alt="" />
                                                <p>save</p>
                                            </div>
                                        </div>
                                    </figure>
                                    <div class="product-info">
                                        <h6>long sleeve jacket</h6>
                                        <p>$59.90</p>
                                        <a href="#" class="site-btn btn-line">ADD TO CART</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="product-item">
                                    <figure>
                                        <img src="img/products/4.jpg" alt="" />
                                        <div class="bache sale">SALE</div>
                                        <div class="pi-meta">
                                            <div class="pi-m-left">
                                                <img src="img/icons/eye.png" alt="" />
                                                <p>quick view</p>
                                            </div>
                                            <div class="pi-m-right">
                                                <img src="img/icons/heart.png" alt="" />
                                                <p>save</p>
                                            </div>
                                        </div>
                                    </figure>
                                    <div class="product-info">
                                        <h6>Denim men shirt</h6>
                                        <p>$32.20 <span>RRP 64.40</span></p>
                                        <a href="#" class="site-btn btn-line">ADD TO CART</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="product-item">
                                    <figure>
                                        <img src="img/products/5.jpg" alt="" />
                                        <div class="pi-meta">
                                            <div class="pi-m-left">
                                                <img src="img/icons/eye.png" alt="" />
                                                <p>quick view</p>
                                            </div>
                                            <div class="pi-m-right">
                                                <img src="img/icons/heart.png" alt="" />
                                                <p>save</p>
                                            </div>
                                        </div>
                                    </figure>
                                    <div class="product-info">
                                        <h6>Long red Shirt</h6>
                                        <p>$39.90</p>
                                        <a href="#" class="site-btn btn-line">ADD TO CART</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="product-item">
                                    <figure>
                                        <img src="img/products/6.jpg" alt="" />
                                        <div class="bache">NEW</div>
                                        <div class="pi-meta">
                                            <div class="pi-m-left">
                                                <img src="img/icons/eye.png" alt="" />
                                                <p>quick view</p>
                                            </div>
                                            <div class="pi-m-right">
                                                <img src="img/icons/heart.png" alt="" />
                                                <p>save</p>
                                            </div>
                                        </div>
                                    </figure>
                                    <div class="product-info">
                                        <h6>Hype grey shirt</h6>
                                        <p>$19.50</p>
                                        <a href="#" class="site-btn btn-line">ADD TO CART</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="product-item">
                                    <figure>
                                        <img src="img/products/7.jpg" alt="" />
                                        <div class="pi-meta">
                                            <div class="pi-m-left">
                                                <img src="img/icons/eye.png" alt="" />
                                                <p>quick view</p>
                                            </div>
                                            <div class="pi-m-right">
                                                <img src="img/icons/heart.png" alt="" />
                                                <p>save</p>
                                            </div>
                                        </div>
                                    </figure>
                                    <div class="product-info">
                                        <h6>long sleeve jacket</h6>
                                        <p>$59.90</p>
                                        <a href="#" class="site-btn btn-line">ADD TO CART</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="product-item">
                                    <figure>
                                        <img src="img/products/8.jpg" alt="" />
                                        <div class="pi-meta">
                                            <div class="pi-m-left">
                                                <img src="img/icons/eye.png" alt="" />
                                                <p>quick view</p>
                                            </div>
                                            <div class="pi-m-right">
                                                <img src="img/icons/heart.png" alt="" />
                                                <p>save</p>
                                            </div>
                                        </div>
                                    </figure>
                                    <div class="product-info">
                                        <h6>Denim men shirt</h6>
                                        <p>$32.20 <span>RRP 64.40</span></p>
                                        <a href="#" class="site-btn btn-line">ADD TO CART</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="product-item">
                                    <figure>
                                        <img src="img/products/9.jpg" alt="" />
                                        <div class="pi-meta">
                                            <div class="pi-m-left">
                                                <img src="img/icons/eye.png" alt="" />
                                                <p>quick view</p>
                                            </div>
                                            <div class="pi-m-right">
                                                <img src="img/icons/heart.png" alt="" />
                                                <p>save</p>
                                            </div>
                                        </div>
                                    </figure>
                                    <div class="product-info">
                                        <h6>Long red Shirt</h6>
                                        <p>$39.90</p>
                                        <a href="#" class="site-btn btn-line">ADD TO CART</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="product-item">
                                    <figure>
                                        <img src="img/products/10.jpg" alt="" />
                                        <div class="bache">NEW</div>
                                        <div class="pi-meta">
                                            <div class="pi-m-left">
                                                <img src="img/icons/eye.png" alt="" />
                                                <p>quick view</p>
                                            </div>
                                            <div class="pi-m-right">
                                                <img src="img/icons/heart.png" alt="" />
                                                <p>save</p>
                                            </div>
                                        </div>
                                    </figure>
                                    <div class="product-info">
                                        <h6>Hype grey shirt</h6>
                                        <p>$19.50</p>
                                        <a href="#" class="site-btn btn-line">ADD TO CART</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="product-item">
                                    <figure>
                                        <img src="img/products/11.jpg" alt="" />
                                        <div class="pi-meta">
                                            <div class="pi-m-left">
                                                <img src="img/icons/eye.png" alt="" />
                                                <p>quick view</p>
                                            </div>
                                            <div class="pi-m-right">
                                                <img src="img/icons/heart.png" alt="" />
                                                <p>save</p>
                                            </div>
                                        </div>
                                    </figure>
                                    <div class="product-info">
                                        <h6>long sleeve jacket</h6>
                                        <p>$59.90</p>
                                        <a href="#" class="site-btn btn-line">ADD TO CART</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="product-item">
                                    <figure>
                                        <img src="img/products/12.jpg" alt="" />
                                        <div class="pi-meta">
                                            <div class="pi-m-left">
                                                <img src="img/icons/eye.png" alt="" />
                                                <p>quick view</p>
                                            </div>
                                            <div class="pi-m-right">
                                                <img src="img/icons/heart.png" alt="" />
                                                <p>save</p>
                                            </div>
                                        </div>
                                    </figure>
                                    <div class="product-info">
                                        <h6>Denim men shirt</h6>
                                        <p>$32.20 <span>RRP 64.40</span></p>
                                        <a href="#" class="site-btn btn-line">ADD TO CART</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="site-pagination">
                            <span class="active">01.</span>
                            <a href="">02.</a>
                            <a href="">03.</a>
                            <a href="">04.</a>
                            <a href="">05.</a>
                            <a href="">06</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
