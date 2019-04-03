import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { get } from '../shared/restful.service';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import product2 from "../assets/img/products/2.jpg"
import product3 from "../assets/img/products/3.jpg"
import product4 from "../assets/img/products/4.jpg"
import eye from "../assets/img/icons/eye.png"
import heart from "../assets/img/icons/heart.png"
import AddToCart from '../components/addToCart';
import AttributesColors from '../components/attributesColors';
import AttributesSizes from '../components/attributesSizes';

export default class Product extends Component {

    rating = <i className="fa fa-star"></i>

    constructor(props) {
        super(props);
        this.state = {
            productsData: {},
            productReview: {},
            productAttributes: [],
            rating: 0
        }
    }

    componentDidMount() {
        let productId = this.props.match.params.productId
        get(`https://backendapi.turing.com/products/${productId}`).then(response => {
            return response.json()
        }).then(result => {
            this.setState({
                productsData: result
            })
        }).catch(error => {
            console.error('Internal server error', error)
        })
        get(`https://backendapi.turing.com/products/${productId}/reviews`).then(response => {
            return response.json()
        }).then(result => {
            this.setState({
                rating: Math.floor(result.reduce((sum, i) => sum + i.rating, 0) / result.length)
            })
            this.setState({
                productReview: result
            })
        }).catch(error => {
            console.error('Internal server error', error)
        })
        get(`https://backendapi.turing.com/attributes/inProduct/${productId}`).then(response => {
            return response.json()
        }).then(result => {
            this.setState({
                productAttributes: result
            })
        }).catch(error => {
            console.error('Internal server error', error)
        })
    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className="page-area product-page spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <figure>
                                    <img className="product-big-img" src={`https://backendapi.turing.com/images/products/${this.state.productsData.image}`} alt="" />
                                </figure>
                                <div className="product-thumbs">
                                    <div className="product-thumbs-track">
                                        <div className="pt">
                                            <img src={`https://backendapi.turing.com/images/products/${this.state.productsData.image_2}`} alt="" />
                                        </div>
                                        <div className="pt">
                                            <img src={`https://backendapi.turing.com/images/products/${this.state.productsData.thumbnail}`} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="product-content">
                                    <h2>{this.state.productsData.name}</h2>
                                    <div className="pc-meta">
                                        <h4 className="price"><span style={{ fontSize: 20, textDecoration: "line-through", paddingRight: 10, color: "#969696" }}>${this.state.productsData.price}</span>${this.state.productsData.discounted_price}</h4>
                                        <div className="review">
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star is-fade"></i>
                                            </div>
                                            <span>({this.state.productReview.length} reviews)</span>
                                        </div>
                                    </div>
                                    <p>{this.state.productsData.description}</p>
                                    <div className="color-choose">
                                        <span>Colors:</span>
                                        {this.state.productAttributes.map(function (item, key) {
                                            if (item.attribute_name === "Color")
                                                return <AttributesColors color={item} key={key}></AttributesColors>
                                            return null
                                        })}
                                    </div>
                                    <div className="size-choose">
                                        <span>Size:</span>
                                        {this.state.productAttributes.map(function (item, key) {
                                            if (item.attribute_name === "Size")
                                                return <AttributesSizes size={item} key={key}></AttributesSizes>
                                            return null
                                        })}
                                    </div>
                                    <AddToCart product={{ product_id: this.state.productsData.product_id }}></AddToCart>
                                </div>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    <ul className="nav" role="tablist">
                                        <li className="nav-item">
                                            <Link className="nav-link active" id="1-tab" data-toggle="tab" to="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Reviews({this.state.productReview.length})</Link>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
                                        </div>
                                        <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
                                        </div>
                                        <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center rp-title">
                            <h5>Related products</h5>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="product-item">
                                    <figure>
                                        <img src={product2} alt="" />
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
                                        <Link to="#" className="site-btn btn-line">ADD TO CART</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
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
                                        <Link to="#" className="site-btn btn-line">ADD TO CART</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
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
                                        <Link to="#" className="site-btn btn-line">ADD TO CART</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
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
                                        <Link to="#" className="site-btn btn-line">ADD TO CART</Link>
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
