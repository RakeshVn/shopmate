import React, { Component } from 'react';
import Navbar from "../components/navbar";
import Products from '../components/products';
import Footer from '../components/footer';
import Slider from '../components/carousel';

export default class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      productsData: []
    }
  }

  componentDidMount() {
    fetch("https://backendapi.turing.com/products").then(response => {
      return response.json()
    }).then(result => {
      this.setState({
        productsData: result.rows
      })
    }).catch(error => {
      console.error('Internal server error', error)
    })
  }

  products() {
    return this.state.productsData.map(function (item) {
      return <Products product={item}></Products>
    })
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Slider></Slider>
        <div className="product-section spad">
          <div className="container">
            <ul className="product-filter controls">
              <li className="control" data-filter=".new">New arrivals</li>
              <li className="control" data-filter="all">Recommended</li>
              <li className="control" data-filter=".best">Best sellers</li>
            </ul>
            <div className="row" id="product-filter">
              {this.state.productsData.map(function (item) {
                return <Products product={item}></Products>
              })}
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
