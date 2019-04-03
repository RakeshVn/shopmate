import React, { Component } from 'react';
import "../assets/css/bootstrap.min.css"
import "../assets/css/font-awesome.min.css"
import "../assets/css/owl.carousel.css"
import "../assets/css/style.css"
import "../assets/css/animate.css"

export default class AttributesSizes extends Component {

    constructor(props) {
        super(props)

        this.state = {
            size: 1
        }
        this.onSizeChange = this.onSizeChange.bind(this)

    }
    onSizeChange(event) {
        console.log("event", event.target.value)
        this.setState({
            size: Number(event.target.value)
        })
    }
    render() {
        return (
            <div className="sc-item">
                <input
                    type="radio"
                    name="size"
                    value={this.props.size.attribute_value_id}
                    checked={this.state.size === Number(this.props.size.attribute_value_id)}
                    onChange={this.onSizeChange}
                />
                <label>{this.props.size.attribute_value}</label>
            </div>
        );
    }
}
