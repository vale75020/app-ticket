import React, { Component } from "react";
import cardTab from "../cardTab";
import UserCard from "../UserCard";
import { Grid, Cell } from "react-mdl";


export default class UserCards extends Component {
  state = {
    cards: cardTab
    }

  render() {
    const displayCards = this.state.cards.map(card => (
      <Cell style={{minWidth:"320px", margin:"0 auto"}} col={3} >
        <div style={{display:'flex',flexWrap:'wrap',margin:"0 20px", width:"100%"}}>
          <UserCard key={card.id} title={card.title} text={card.text} status={card.status} />
        </div>
      </Cell>

      
    ))
    return (
      <div>
        <h1> User Cards </h1>
        <Grid className="demo-grid-ruler">
          <div style={{display:'flex', flexWrap:'wrap', width:"90%",margin:"0 5%", justifyContent:"space-between"}}>
              {displayCards}
          </div>
      </Grid>
      </div>
      
        
      
    );
  }
}
