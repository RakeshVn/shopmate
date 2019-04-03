import React, { Component } from 'react';
import "../assets/css/bootstrap.min.css"
import "../assets/css/font-awesome.min.css"
import "../assets/css/owl.carousel.css"
import "../assets/css/style.css"
import "../assets/css/animate.css"

export default class AttributesSizes extends Component {
    render() {
        return (
            <div className="sc-item">
                <input type="radio" name={this.props.size.attribute_value_id}/>
                <label>{this.props.size.attribute_value}</label>
            </div>
        );
    }
}
