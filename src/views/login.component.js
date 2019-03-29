import React, { Component } from 'react';
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import ValidateInput from "../shared/login.validations";
export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            errors: {}
        }
        this.onEmailChange = this.onEmailChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
        this.onLogin = this.onLogin.bind(this)
    }

    componentDidMount() {

    }

    isValid() {
        const { errors, isValid } = ValidateInput(this.state)
        console.log(errors, isValid)
        if (!isValid) {
            this.setState({
                errors: errors
            })
        }

        return isValid
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

    onLogin(event) {
        event.preventDefault();
        console.log(this.state.email, this.state.password)
        console.log(this.isValid())

        // fetch('https://backendapi.turing.com/customers/login', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         email: this.state.email,
        //         password: this.state.password
        //     })
        // }).then(response => {
        //     return response.json()
        // }).then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.error(error)
        // })
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
                        <form className="contact-form" onSubmit={this.onLogin}>
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
