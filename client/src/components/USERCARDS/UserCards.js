import React, { Component } from "react";
import cardTab from "../cardTab";
import UserCard from "../UserCard";

export default class UserCards extends Component {
  state = {
    cards: cardTab
    }

  render() {
    const displayCards = this.state.cards.map(card => (
      <UserCard key={card.id} title={card.title} text={card.text} step={card.step} />
    ))
    return (
      <div>
        <h1> Cards </h1>
       <div style={{display:'flex',flexWrap:'wrap', alignItems:"start"}}>{displayCards}</div>
      </div>
    );
  }
}
