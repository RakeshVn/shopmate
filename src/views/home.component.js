import React, { Component } from 'react';
import Navbar from "../components/navbar";
import Products from '../components/products';
import Footer from '../components/footer';
import Slider from '../components/carousel';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Slider></Slider>
        <Products></Products>
        <Footer></Footer>
      </div>
    );
  }
}
