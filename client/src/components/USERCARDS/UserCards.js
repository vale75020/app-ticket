import React, { Component } from "react";
//import cardTab from "../cardTab";
import UserCard from "../USERCARD/UserCard";
import { Grid, Cell } from "react-mdl";
// import UserLayout from "../USERLAYOUT/UserLayout";
import axios from "axios";
import UserLayout2 from '../UserLayout2'

export default class UserCards extends Component {
  state = {
    cards: [],
    isUser: false
  };

  componentWillMount() {
    axios
      .get("http://localhost:3333/mycards")
      .then(response => {
        console.log("response usercards", response);
        this.setState({
          cards: response.data
        });
        localStorage.token && this.setState({ isUser: true });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // handleDelete = id => {
  //   alert("card deleted");
  //   const cards = this.state.cards.filter(card => card.id !== id);
  //   this.setState({ cards: cards });
  // };

  handleDelete = id => {
    console.log(id);
    axios
      .delete(`http://localhost:3333/${id}`, {})
      .then(response => {
        alert("card deleted");
        // this.setState({ cards: this.state.cards })
        this.componentWillMount();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const displayCards = this.state.cards.map(card => (
      <Cell
        key={card._id}
        style={{ minWidth: "270px", margin: "0 auto" }}
        col={3}
      >
        <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
          <UserCard
            id={card._id}
            title={card.title}
            text={card.text}
            status={card.status}
            onDelete={this.handleDelete}
          />
        </div>
      </Cell>
    ));
    return (
      <div>
        <UserLayout2 />
        <h1 style={{ fontFamily: "Permanent Marker, cursive" }}>
          User Cards
        </h1>
        <Grid className="demo-grid-ruler" style={{ padding: 0 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "90%",
              margin: "0 5%",
              justifyContent: "space-between"
            }}
          >
            {displayCards}
          </div>
        </Grid>
      </div>
    );
  }
}
