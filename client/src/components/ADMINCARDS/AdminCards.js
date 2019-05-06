import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import cardTab from "../cardTab";
import UserCard from "../USERCARD/UserCard";
import AdminLayout from "../ADMINLAYOUT/AdminLayout"
import './AdminCards.css'

class AdminCards extends Component {
  state = {
    cards: cardTab
    }

  handleDelete = id => {
    alert("card deleted")
    const cards = this.state.cards.filter(card => card.id !== id);
    this.setState({ cards: cards });
  };

  render() {
    console.log("admincard", this.state)
    const validate = this.state.cards.map(card => {
      if (card.status === "to-validate") {
        return  <UserCard id ={card.id} title={card.title} text={card.text} status={card.status} onDelete={this.handleDelete} />;
      }
    });
    const todo = this.state.cards.map(card => {
      if (card.status === "to-do") {
        return <UserCard id ={card.id} title={card.title} text={card.text} status={card.status} onDelete={this.handleDelete}/>;
      }
    });
    const doing = this.state.cards.map(card => {
      if (card.status === "doing") {
        return  <UserCard id ={card.id} title={card.title} text={card.text} status={card.status} onDelete={this.handleDelete}/>;
      }
    });
    const done = this.state.cards.map(card => {
      if (card.status === "done") {
        return <UserCard id ={card.id} title={card.title} text={card.text} status={card.status} onDelete={this.handleDelete}/>;
      }
    });
    return (
      <div>
        <AdminLayout />
          <h2>Admin Cards</h2>
        <div style={{ width: "90%", height: "auto", fontSize: "20px",padding:"0", margin: "20px auto" }}>
          <Grid className="demo-grid-ruler" style={{ padding:"0"}}>
            <Cell className="column" col={3} style={{minWidth:"270px", margin:"20px auto"}}>
              Valider
              {validate}
            </Cell>
              <Cell className="column" col={3} style={{minWidth:"270px", margin:"20px auto"}}>
              To Do 
              {todo}
            </Cell>
            <Cell className="column" col={3} style={{minWidth:"270px", margin:"20px auto"}}>
              Doing
              {doing}
            </Cell>
            <Cell className="column" col={3} style={{minWidth:"270px", margin:"20px auto"}}>
              Done
              {done}
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default AdminCards;
