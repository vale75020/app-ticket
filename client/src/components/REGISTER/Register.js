import React, { Component } from 'react';
import "./register.css"

class Register extends Component {
    render() {
        return (
            <div className="register">
             <h1 className="reg">New User</h1>
                <input type="text" placeholder="enter username" />
                <input type="password" placeholder="enter password" />
                <button  type="submit" onClick={() => console.log("i was clicked")}>Register</button>
            </div>
        );
    }
}

export default Register;