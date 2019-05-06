import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
//import cardTab from "../cardTab";
import UserCard from "../USERCARD/UserCard";
import AdminLayout from "../ADMINLAYOUT/AdminLayout"
import './AdminCards.css';
import axios from "axios";

class AdminCards extends Component {
  state = {
    cards: []
    }

    componentWillMount() {
      axios.get('http://localhost:3333/cards/cards', {
      })
    .then((response) => {
      console.log("response usercards", response);
      this.setState({ 
        cards: response.data
      })
      })
    .catch((error) => {
        console.log(error)
      });
    }

  // handleDelete = id => {
  //   alert("card deleted")
  //   const cards = this.state.cards.filter(card => card._id !== id);
  //   this.setState({ cards: cards });
  // };

  handleDelete = id => {
    console.log(id)
      axios.delete(`http://localhost:3333/cards/cards/${id}`, {
      })
    .then((response) => {
      alert("card deleted")
      this.componentWillMount();
      })
    .catch((error) => {
        console.log(error)
      });
  }


  render() {
    // console.log("admincard", this.state)
    const validate = this.state.cards.filter(card => card.status === "to validate")
    .map(card =>  <UserCard id ={card._id} title={card.title} text={card.text} status={card.status} onDelete={this.handleDelete} />)
    
    const todo = this.state.cards.filter(card => card.status === "to do")
    .map(card =>  <UserCard id ={card._id} title={card.title} text={card.text} status={card.status} onDelete={this.handleDelete} />)
    
    const doing = this.state.cards.filter(card => card.status === "doing")
    .map(card =>  <UserCard id ={card._id} title={card.title} text={card.text} status={card.status} onDelete={this.handleDelete} />)
    
    const done = this.state.cards.filter(card => card.status === "done")
    .map(card =>  <UserCard id ={card._id} title={card.title} text={card.text} status={card.status} onDelete={this.handleDelete} />)
    
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
