import React, { Component } from 'react';
import Logo from "../LOGO/Logo"
import "./login.css"

class Login extends Component {
    render() {
        return (
            <div id="login">
                <Logo />
                <input placeholder="enter your username" />
                <input placeholder="enter your password" />
                <button>LOGIN</button>
            </div>
        );
    }
}

export default Login;