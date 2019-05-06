import React, { Component } from "react";
import cardTab from "../cardTab";
import UserCard from "../USERCARD/UserCard";
import { Grid, Cell } from "react-mdl";
import UserLayout from '../USERLAYOUT/UserLayout'


export default class UserCards extends Component {
  state = {
    cards: cardTab
    }

    handleDelete = id => {
      alert("card deleted")
      const cards = this.state.cards.filter(card => card.id !== id);
      this.setState({ cards: cards });
    };

  render() {
    const displayCards = this.state.cards.map(card => (
      <Cell style={{minWidth:"270px", margin:"0 auto"}} col={3} key={card.id}>
        <div style={{display:'flex',flexWrap:'wrap', width:"100%"}}>
          <UserCard id={card.id} title={card.title} text={card.text} status={card.status} onDelete={this.handleDelete} />
        </div>
      </Cell>

      
    ))
    return (
      <div>
        <UserLayout />
        <h1 style={{fontFamily: "Permanent Marker, cursive"}}> User Cards </h1>
        <Grid className="demo-grid-ruler" style={{padding:0}}>
          <div style={{display:'flex', flexWrap:'wrap', width:"90%",margin:"0 5%", justifyContent:"space-between"}}>
              {displayCards}
          </div>
      </Grid>
      </div>
      
        
      
    );
  }
}
