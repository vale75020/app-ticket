import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from 'react-router-dom';

export default class AdminLayout extends Component {
  logout() {
    localStorage.clear();
    window.location.href = "/";
  }

  render() {
    return (
      <div>
        {/* Always shows a header, even in smaller screens. */}
        <div
          style={{
            height: "63px",
            position: "relative",
            backgroundColor: "#e67e22",
            color: "#ddd"
          }}
        >
          <Layout
            style={{
              height: "64px",
              backgroundColor: "#e67e22",
              color: "#ddd"
            }}
            fixedHeader
          >
            <Header
              style={{ backgroundColor: "#e67e22", color: "#ddd" }}
              title={
                <span>
                  <span style={{ color: "#ddd" }}>Prizoners / </span>
                  <strong>Welcome {localStorage.username}</strong>
                </span>
              }
            >
              <Navigation>
              <Link to="/mycards">Home</Link>
                <Link to="/newcard">Add Card</Link>
                <Link to="/mycards" onClick={this.logout}>
                  Logout
                </Link>
              </Navigation>
            </Header>
            <Drawer title="Title">
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
          </Layout>
        </div>
      </div>
    );
  }
}


