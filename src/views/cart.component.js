import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';

export default class Cart extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className="page-area cart-page spad">
                    <div className="container">
                        <div className="cart-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="product-th">Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th className="total-th">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="product-col">
                                            <img src="img/product/cart.jpg" alt="" />
                                            <div className="pc-title">
                                                <h4>Black Shoulder Bag</h4>
                                                <Link to="#">Edit Product</Link>
                                            </div>
                                        </td>
                                        <td className="price-col">$59.90</td>
                                        <td className="quy-col">
                                            <div className="quy-input">
                                                <span>Qty</span>
                                                <input type="number" />
                                            </div>
                                        </td>
                                        <td className="total-col">$59.90</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="row cart-buttons">
                            <div className="col-lg-5 col-md-5">
                                <div className="site-btn btn-continue">Continue shooping</div>
                            </div>
                            <div className="col-lg-7 col-md-7 text-lg-right text-left">
                                <div className="site-btn btn-clear">Clear cart</div>
                                <div className="site-btn btn-line btn-update">Update Cart</div>
                            </div>
                        </div>
                    </div>
                    <div className="card-warp">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="shipping-info">
                                        <h4>Shipping method</h4>
                                        <p>Select the one you want</p>
                                        <div className="shipping-chooes">
                                            <div className="sc-item">
                                                <input type="radio" name="sc" id="one" />
                                                <label>Next day delivery<span>$4.99</span></label>
                                            </div>
                                            <div className="sc-item">
                                                <input type="radio" name="sc" id="two" />
                                                <label>Standard delivery<span>$1.99</span></label>
                                            </div>
                                            <div className="sc-item">
                                                <input type="radio" name="sc" id="three" />
                                                <label>Personal Pickup<span>Free</span></label>
                                            </div>
                                        </div>
                                        <h4>Cupon code</h4>
                                        <p>Enter your cupone code</p>
                                        <div className="cupon-input">
                                            <input type="text" />
                                            <button className="site-btn">Apply</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="offset-lg-2 col-lg-6">
                                    <div className="cart-total-details">
                                        <h4>Cart total</h4>
                                        <p>Final Info</p>
                                        <ul className="cart-total-card">
                                            <li>Subtotal<span>$59.90</span></li>
                                            <li>Shipping<span>Free</span></li>
                                            <li className="total">Total<span>$59.90</span></li>
                                        </ul>
                                        <Link to="site-btn btn-full" href="checkout.html">Proceed to checkout</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}
