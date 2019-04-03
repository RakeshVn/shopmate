import React, { Component } from 'react';
import "../assets/css/bootstrap.min.css"
import "../assets/css/font-awesome.min.css"
import "../assets/css/owl.carousel.css"
import "../assets/css/style.css"
import "../assets/css/animate.css"

export default class AttributesColors extends Component {

    render() {
        return (
            <div className="cs-item">
                <input type="radio" name="cs" />
                <label className={`cs-${this.props.color.attribute_value.toLowerCase()}`}></label>
            </div>
        );
    }
}
