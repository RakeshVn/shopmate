import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/**
 * Components
 * @Home
 * @Cart
 * @Checkout
 * @Product
 */
import Home from './views/home.component'
import Cart from './views/cart.component'
import Checkout from './views/checkout.component';
import Product from './views/product.component';
import Categories from './views/categories.component';
import Signup from './views/signup.component';
import Login from './views/login.component';


class App extends Component {
  render() {
    return (
      <div>
        {/* <div id="preloder">
          <div className="loader"></div>
        </div> */}
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/product" exact component={Product} />
          <Route path="/categories" exact component={Categories} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
        </Router>
      </div>
    );
  }
}

export default App;
