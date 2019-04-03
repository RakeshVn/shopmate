import React, { Component } from 'react';
import "../assets/css/bootstrap.min.css"
import "../assets/css/font-awesome.min.css"
import "../assets/css/owl.carousel.css"
import "../assets/css/style.css"
import "../assets/css/animate.css"

export default class AttributesColors extends Component {

    constructor(props) {
        super(props)

        this.state = {
            color: 1
        }
        this.onColorChange = this.onColorChange.bind(this)

    }
    onColorChange(event) {
        this.setState({
            color: Number(event.target.value)
        })
    }
    render() {
        return (
            <div className="cs-item">
                <input
                    type="radio"
                    name="color"
                    value={Number(this.props.color.attribute_value_id)}
                    checked={this.state.color === Number(this.props.color.attribute_value_id)}
                    onChange={this.onColorChange} />
                <label className={`cs-${this.props.color.attribute_value.toLowerCase()}`}></label>
            </div>
        );
    }
}
