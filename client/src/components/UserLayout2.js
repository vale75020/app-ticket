import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AdminLayout2 extends Component {
  logout() {
    localStorage.clear();
    window.location.href = "/";
  }

  
  render() {
    return (
      <nav
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          fontSize: "26px",
          minHeight: "64px",
          lineHeight: "64px",
          position: "relative",
          backgroundColor: "#e67e22",
          color: "#ddd"
        }}
      >
        <div style={{ color: "white" }}>
          Prizoners /<strong>Welcome {localStorage.username}</strong>
        </div>
        <div>
          <Link style={{ textDecoration:"none",color: "rgb(255, 196, 4)" }} to="/mycards">Home</Link>
          </div>
          <div>
          <Link style={{ textDecoration:"none",color: "rgb(255, 196, 4)" }} to="/newcard">Add Card</Link>
          </div>
          <div>
          <Link style={{ textDecoration:"none",color: "rgb(255, 196, 4)" }} to="/mycards" onClick={this.logout}>Logout</Link>
          </div>
        
      </nav>
    );
  }
}
