import React, { Component } from "react";
import "./register.css";
import axios from "axios";

class Register extends Component {
  state = {
    err: "",
    userCreate: "",
    username: "",
    password: ""
  };

  handleOnSubmit = e => {  // envoier à la bdd le username et password
    e.preventDefault();
    const newUser = {   // new user
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post("http://localhost:3333/users/register", newUser)  // post pour registrer les données
      .then(response => {
        // console.log(response.data);
        this.setState({
          userCreate: response.data.username,  // confirmation creation user 
          username: "",
          password: ""
        });
      })
      .catch(err => {
        this.setState({ err: 'L"utilisateur existe deja' });
      });
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="register">
          <h1 className="reg">New User</h1>
          <form onSubmit={this.handleOnSubmit}>
            <input
              name="username"
              type="text"
              placeholder="enter username"
              value={this.state.username}
              onChange={this.handleOnChange}
            />
            <input
              name="password"
              type="password"
              placeholder="enter password"
              value={this.state.password}
              onChange={this.handleOnChange}
            />
            <button type="submit">Register</button>
            {this.state.userCreate ? (
              <div style={{ color: "white" }}>{`L'utilisateur ${
                this.state.userCreate
              } a été crée`}</div>
            ) : (
              <div />
            )}
            {this.state.err ? (
              <div style={{ color: "white" }}>{this.state.err}</div>
            ) : (
              <div />
            )}
            <hr />
            <button id="home">HOME</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
