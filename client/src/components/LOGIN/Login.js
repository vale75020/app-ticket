import React, { Component } from "react";
import Logo from "../LOGO/Logo";
import "./login.css";
import axios from 'axios'

class Login extends Component {

  state = {
    username:"",
    password:""
  }

  login = () => {

    axios.post('http://localhost:3333/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {

      console.log(error);
    });
    this.setState({  // reinitializer inputs
      username:"",
      password:""
    })
  }
 
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div className="login">
        <Logo />
        <input
          onChange={this.handleChange}
          value= {this.state.username}
          className="loginInput"
          type="text"
          name="username"
          placeholder="enter your username"
          required
        />
        <input
          onChange={this.handleChange}
          value= {this.state.password}
          className="loginInput"
          name="password"
          type="password"
          placeholder="enter your password"
          required
        />
        <button onClick={this.login}>LOGIN</button>
      </div>
    );
  }
}

export default Login;
