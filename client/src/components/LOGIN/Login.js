import React, { Component } from "react";
import Logo from "../LOGO/Logo";
import "./login.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: "",
    redirect: false,
    isLogged: false
  };

  login = () => {
    axios
      .post("http://localhost:3333/users/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(function(response) {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        this.setState({ redirect: true });
      })
      .catch(function(error) {
        console.log(error);
      });
    this.setState({
      // reinitializer inputs
      username: "",
      password: ""
    });
  };

  isLoginRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/cards/mycards" />;
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    if (localStorage.getItem("token")) {
      return <h2>bug</h2>;
    } else {
      return (
        <div className="login">
          <Logo />
          <input
            onChange={this.handleChange}
            value={this.state.username}
            className="loginInput"
            type="text"
            name="username"
            placeholder="enter your username"
            required
          />
          <input
            onChange={this.handleChange}
            value={this.state.password}
            className="loginInput"
            name="password"
            type="password"
            placeholder="enter your password"
            required
          />
          <button>LOGIN</button>
          {this.isLoginRedirect()}
        </div>
      );
    }
  }
}

export default Login;
