import React, { Component } from 'react';
import Navbar from "../components/navbar";
import Footer from '../components/footer';

export default class Signup extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            name: "",
            password: ""
        }
        this.onEmailChange = this.onEmailChange.bind(this)
        this.onNameChange = this.onNameChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
        this.onRegister = this.onRegister.bind(this)
    }

    componentDidMount() {

    }

    onEmailChange(event) {
        this.setState({
            email: event.target.value
        })
    }

    onPasswordChange(event) {
        this.setState({
            password: event.target.value
        })
    }

    onNameChange(event) {
        this.setState({
            name: event.target.value
        })
    }

    onRegister(event) {
        event.preventDefault();
        console.log(this.state.email, this.state.name, this.state.password)
        fetch('https://backendapi.turing.com/customers', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        }).then(response => {
            return response.json()
        }).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.error(error)
        })
    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className="page-area contact-page">
                    <div className="container spad">
                        <div className="text-center">
                            <h4 className="contact-title">Shopmate</h4>
                        </div>
                        <form className="contact-form" onSubmit={this.onRegister}>
                            <div className="row justify-content-md-center">
                                <div className="col-md-6">
                                    <input type="text" placeholder="Name *" value={this.state.name} onChange={this.onNameChange} />
                                </div>
                            </div>
                            <div className="row justify-content-md-center">
                                <div className="col-md-6">
                                    <input type="text" placeholder="Email *" value={this.state.email} onChange={this.onEmailChange} />
                                </div>
                            </div>
                            <div className="row justify-content-md-center">
                                <div className="col-md-6">
                                    <input type="text" placeholder="Password *" value={this.state.password} onChange={this.onPasswordChange} />
                                </div>
                            </div>
                            <div className="row justify-content-md-center">
                                <div className="text-center">
                                    <button type="submit" className="site-btn">Signup</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}
