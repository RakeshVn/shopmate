import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "../assets/css/bootstrap.min.css"
import "../assets/css/font-awesome.min.css"
import "../assets/css/owl.carousel.css"
import "../assets/css/style.css"
import "../assets/css/animate.css"
import cards1 from "../assets/img/featured/featured-1.jpg"

export default class Categories extends Component {
    render() {
        return (
            <div className="col-md-4">
                <div className="featured-item">
                    <img src={cards1} alt="" />
                    <Link to={{ pathname: `/department/${this.props.department.department_id}` }} className="site-btn">{this.props.department.name}</Link>
                </div>
            </div>
        );
    }
}
