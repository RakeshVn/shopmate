import React, { Component } from 'react';
import Navbar from "../components/navbar";
import Products from '../components/products';
import Footer from '../components/footer';
import Slider from '../components/carousel';
import {
  get
} from "../shared/restful.service";
import Categories from '../components/categories';

export default class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      productsData: [],
      departmentsData: []
    }
  }

  componentDidMount() {
    get("https://backendapi.turing.com/products").then(response => {
      return response.json()
    }).then(result => {
      this.setState({
        productsData: result.rows
      })
    }).catch(error => {
      console.error('Internal server error', error)
    })

    get("https://backendapi.turing.com/departments").then(response => {
      return response.json()
    }).then(result => {
      this.setState({
        departmentsData: result
      })
    }).catch(error => {
      console.error('Internal server error', error)
    })
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Slider></Slider>
        <div className="featured-section spad">
          <div className="container">
            <div className="row">
              {this.state.departmentsData.map(function (item, key) {
                console.log(item)
                return <Categories department={item} key={key}></Categories>
              })}
            </div>
          </div>
        </div>
        <div className="product-section spad">
          <div className="container">
            <ul className="product-filter controls">
              <li className="control" data-filter=".new">New arrivals</li>
              <li className="control" data-filter="all">Recommended</li>
              <li className="control" data-filter=".best">Best sellers</li>
            </ul>
            <div className="row" id="product-filter">
              {this.state.productsData.map(function (item, key) {
                return <Products product={item} key={key}></Products>
              })}
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
