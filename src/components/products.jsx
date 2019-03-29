import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "../assets/css/bootstrap.min.css"
import "../assets/css/font-awesome.min.css"
import "../assets/css/owl.carousel.css"
import "../assets/css/style.css"
import "../assets/css/animate.css"
import eye from "../assets/img/icons/eye.png"
import heart from "../assets/img/icons/heart.png"

export default class Products extends Component {
    render() {
        return (
            <div className="mix col-lg-3 col-md-6 best">
                <div className="product-item">
                    <figure>
                        <img src={"https://backendapi.turing.com/images/products/" + this.props.product.thumbnail} alt={this.props.product.name} />
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
                        <h6>{this.props.product.name}</h6>
                        <h6 style={{ fontSize: 10 }}>{this.props.product.description}</h6>
                        <p>{this.props.product.price}</p>
                        <Link to="#" className="site-btn btn-line">ADD TO CART</Link>
                    </div>
                </div>
            </div>
        );
    }
}
