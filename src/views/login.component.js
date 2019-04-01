import React, { Component } from 'react';
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import ValidateInput from "../shared/login.validations";
import {
    post
} from "../shared/restful.service";

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

        let postData = {
            email: this.state.email,
            password: this.state.password
        }

        if (this.isValid()) {
            post('https://backendapi.turing.com/customers/login', postData).then(response => {
                return response.json()
            }).then((result) => {
                if (result.accessToken) {
                    localStorage.setItem('accessToken', result.accessToken)
                }
            }).catch((error) => {
                console.error(error)
            })
        }
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
                                    <button type="submit" className="site-btn">Login</button>
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
