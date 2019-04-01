import React, { Component } from 'react';
import Navbar from "../components/navbar";
import Footer from '../components/footer';

export default class NotFound extends Component {

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className="container mt-5 mb-5">
                    <div className="row justify-content-md-center">
                        <div className="col-md-auto">
                            <h1>Oops!</h1>
                            <h2>404 Not Found</h2>
                            <p>Requested page not found!</p>
                        </div>
                    </div>
                </div>

                <Footer></Footer>
            </div>
        );
    }
}
