import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import UserCard from "../USERCARD/UserCard";
import AdminLayout from "../ADMINLAYOUT/AdminLayout";
import "./AdminCards.css";
import axios from "axios";

import {DragDropContext, Droppable} from 'react-beautiful-dnd';

class AdminCards extends Component {
  state = {
    cards: []
  };

  componentWillMount() {
    axios
      .get("http://localhost:3333/all")
      .then(response => {
        console.log("response usercards", response);
        this.setState({
          cards: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // handleDelete = id => {
  //   alert("card deleted")
  //   const cards = this.state.cards.filter(card => card._id !== id);
  //   this.setState({ cards: cards });
  // };

  handleDelete = id => {
    console.log(id);
    axios
      .delete(`http://localhost:3333/${id}`, {})
      .then(response => {
        alert("card deleted");
        this.componentWillMount();
      })
      .catch(error => {
        console.log(error);
      });
  };

  onDragEnd = result => {

  }

  render() {
    // console.log("admincard", this.state)
    const validate = this.state.cards
      .filter(card => card.status === "to validate")
      .map(card => (
        <UserCard
          key={card._id}
          id={card._id}
          title={card.title}
          text={card.text}
          status={card.status}
          onDelete={this.handleDelete}
        />
      ));

    const todo = this.state.cards
      .filter(card => card.status === "to do")
      .map(card => (
        <UserCard
          key={card._id}
          id={card._id}
          title={card.title}
          text={card.text}
          status={card.status}
          onDelete={this.handleDelete}
        />
      ));

    const doing = this.state.cards
      .filter(card => card.status === "doing")
      .map(card => (
        <UserCard
          key={card._id}
          id={card._id}
          title={card.title}
          text={card.text}
          status={card.status}
          onDelete={this.handleDelete}
        />
      ));

    const done = this.state.cards
      .filter(card => card.status === "done")
      .map(card => (
        <UserCard
          key={card._id}
          id={card._id}
          title={card.title}
          text={card.text}
          status={card.status}
          onDelete={this.handleDelete}
        />
      ));

    return (
      <div>
        <AdminLayout />
        <h2>Admin Cards</h2>
        <DragDropContext
        onDragEnd={this.onDragEnd}>
        <div
          style={{
            width: "90%",
            height: "auto",
            fontSize: "20px",
            padding: "0",
            margin: "20px auto"
          }}
        >
          <Grid className="demo-grid-ruler" style={{ padding: "0" }}>
            {/* <Droppable droppableId={this.props.column.id}> */}
            <Cell
              className="column"
              id="1"
              col={3}
              style={{ minWidth: "270px", margin: "20px auto" }}
            >
              Valider
              {validate}
            </Cell>
            {/* </Droppable>
            <Droppable> */}
            <Cell
              className="column"
              id="2"
              col={3}
              style={{ minWidth: "270px", margin: "20px auto" }}
            >
              To Do
              {todo}
            </Cell>
            {/* </Droppable>
            <Droppable> */}
            <Cell
              className="column"
              id="3"
              col={3}
              style={{ minWidth: "270px", margin: "20px auto" }}
            >
              Doing
              {doing}
            </Cell>
            {/* </Droppable>
            <Droppable> */}
            <Cell
              className="column"
              id="4"
              col={3}
              style={{ minWidth: "270px", margin: "20px auto" }}
            >
              Done
              {done}
            </Cell>
            {/* </Droppable> */}
          </Grid>
        </div>
        </DragDropContext>
      </div>
    );
  }
}

export default AdminCards;
