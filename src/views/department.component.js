import React, { Component } from 'react';
import Navbar from "../components/navbar";
import Products from '../components/products';
import Footer from '../components/footer';
import {
    get
} from "../shared/restful.service";

export default class Department extends Component {

    constructor(props) {
        super(props)

        this.state = {
            productsData: []
        }
    }

    componentDidMount() {
        get(`https://backendapi.turing.com/products/inDepartment/${this.props.match.params.deparmentId}`).then(response => {
            return response.json()
        }).then(result => {
            this.setState({
                productsData: result.rows
            })
        }).catch(error => {
            console.error('Internal server error', error)
        })
    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
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
