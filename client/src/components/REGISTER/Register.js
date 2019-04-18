import React, { Component } from "react";
import "./register.css";

class Register extends Component {
  state = {
    username: "",
    password: ""
  };

  handleOnSubmit = () => {
      
    
  }

  handleOnChange = (e) => {
      this.setState=({
          [e.target.name] : e.target.value
        })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="register">
          <h1 className="reg">New User</h1>
          <form onSubmit={this.handleOnSubmit}>
            <input name="username" type="text" placeholder="enter username" onChange={this.handleOnChange} />
            <input name="password" type="password" placeholder="enter password" onChange={this.handleOnChange} />
            <button type="submit" onClick={() => console.log("i was clicked")}>
              Register
            </button>
            <hr />
            <button id="home">HOME</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
