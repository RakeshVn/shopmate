import React, { Component } from 'react';
import "../assets/css/bootstrap.min.css"
import "../assets/css/font-awesome.min.css"
import "../assets/css/owl.carousel.css"
import "../assets/css/style.css"
import "../assets/css/animate.css"
import { get } from '../shared/restful.service';

export default class AddToCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartId: ""
        }
        this.addToCart = this.addToCart.bind(this);
    }
    addToCart(productId) {
        get("https://backendapi.turing.com/shoppingcart/generateUniqueId").then((response) => {
            return response.json()
        }).then((result) => {
            this.setState({
                cartId: result
            })
        })
        console.log('productId', productId)
    }

    render() {
        return (
            <div>
                <button onClick={this.addToCart.bind(this, this.props.product.product_id)} className="site-btn btn-line">ADD TO CART</button>
            </div>
        );
    }
}
