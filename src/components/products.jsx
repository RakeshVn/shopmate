import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/bootstrap.min.css"
import "../assets/css/font-awesome.min.css"
import "../assets/css/owl.carousel.css"
import "../assets/css/style.css"
import "../assets/css/animate.css"
import eye from "../assets/img/icons/eye.png"
import heart from "../assets/img/icons/heart.png"
import AddToCart from './addToCart';

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
    }
    addToCart(productId) {
        console.log('productId', productId)
    }

    render() {
        return (
            <div className="mix col-lg-3 col-md-6 best">
                <div className="product-item">
                    <figure>
                        <img src={"https://backendapi.turing.com/images/products/" + this.props.product.thumbnail} alt={this.props.product.name} />
                        <div className="pi-meta">
                            <div className="pi-m-left">
                                <img src={eye} alt="" />
                                <Link style={{color:"#ffffff"}} to={{ pathname: `/product/${this.props.product.product_id}` }}>View</Link>
                            </div>
                            <div className="pi-m-right">
                                <img src={heart} alt="" />
                                <p>save</p>
                            </div>
                        </div>
                    </figure>
                    <div className="product-info">
                        <h6>{this.props.product.name}</h6>
                        <p>{this.props.product.price}</p>
                        <AddToCart product={{ product_id: this.props.product.product_id }}></AddToCart>
                    </div>
                </div>
            </div>
        );
    }
}
