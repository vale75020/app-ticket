import React, { Component } from 'react';
import Logo from "../LOGO/Logo"
import "./login.css"

class Login extends Component {
    render() {
        return (
            <div id="login">
                <Logo />
                <input type="text" placeholder="enter your username" />
                <input type="password" placeholder="enter your password" />
                <button  onClick={() => console.log("i was clicked")}>LOGIN</button>
            </div>
        );
    }
}

export default Login;