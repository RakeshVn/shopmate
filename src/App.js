import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
import { ProtectedRoute } from './shared/protected.routes';
import NotFound from './views/404.component';


class App extends Component {
  render() {
    return (
      <div>
        {/* <div id="preloder">
          <div className="loader"></div>
        </div> */}
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <ProtectedRoute path="/cart" exact component={Cart} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/product" exact component={Product} />
            <Route path="/categories" exact component={Categories} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
