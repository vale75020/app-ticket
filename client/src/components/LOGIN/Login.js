import React, { Component } from "react";
import Logo from "../LOGO/Logo";
import "./login.css";
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import jwt_decode from "jwt-decode";

class Login extends Component {

  state = {
    username:"",
    password:"",
    redirect:false
  }

  login = () => {

    axios.post('http://localhost:3333/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then((response) => {
      console.log(response);
      localStorage.setItem('token', response.data.token);
      const decoded = jwt_decode(localStorage.getItem("token"));
      localStorage.setItem('isAdmin', decoded.admin);
      //console.log("const decoded: ", decoded)
      this.setState({redirect: true})
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
    if(this.state.redirect) {
      if(localStorage.getItem("isAdmin")) {
        return (<Redirect to="all" />)
      } else { return (<Redirect to="/mycards" />) }
    }
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
