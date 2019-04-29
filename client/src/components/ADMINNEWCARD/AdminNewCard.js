import React, { Component } from "react";
import "./adminNewCard.css";
import axios from "axios";
import AdminLayout from "../ADMINLAYOUT/AdminLayout"

class AdminNewCard extends Component {
  state = {
    err: "",
    title: "",
    description: "",
    status: ""
  };

  handleOnSubmit = e => {  // envoier à la bdd les info de la card
    e.preventDefault();

    this.setState({
      err: '',
      cardCreate: ''
    })
    const newCard = {   // new card
      title: this.state.title,
      description: this.state.description,
      status: this.state.status
    };
    axios
      .post("http://localhost:3333/users/adminnewcard", newCard)  // post pour registrer les données
      .then(response => {
        //console.log('in then', response);
        this.setState({
          cardCreate: response.data.adminCard,  // confirmation creation user 
          title: "",
          description: "",
          status: ""
        });
      })
      .catch(err => {
        console.log('in error', err)
        this.setState({ err: 'La card existe deja' });
      });
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
      <AdminLayout />
      <div className="wrapper">
        <div className="register">
          <h1 className="reg">New Card</h1>
          <form onSubmit={this.handleOnSubmit}>
          <input
              name="status"
              type="text"
              placeholder="enter status"
              value={this.state.status}
              onChange={this.handleOnChange}
              required
            />
            <input
              name="title"
              type="text"
              placeholder="enter title"
              value={this.state.title}
              onChange={this.handleOnChange}
              required
            />
            <textarea
              name="text"
              type="text"
              placeholder="enter description"
              value={this.state.text}
              onChange={this.handleOnChange}
              required
            />
            <button type="submit">Register</button>


            {this.state.cardCreate ? (
              <div style={{ color: "white" }}>{`La card ${this.state.title} a été crée`}</div>
            ) : ''}
            
            {this.state.err ? (
              <div style={{ color: "white" }}>{this.state.err}</div>
            ) : ''}
            <hr />
          </form>
        </div>
      </div>
      </div>
    );
  }
}

export default AdminNewCard;