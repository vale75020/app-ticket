import React, { Component } from "react";
import UserCard from "../USERCARD/UserCard";
import AdminLayout from "../ADMINLAYOUT/AdminLayout";
import "./AdminCards.css";
import axios from "axios";
import styled from "styled-components";


// import { DragDropContext, Droppable} from "react-beautiful-dnd";

const Container = styled.div`
  width: "90%";
  height: auto;
  font-size: 20px;
  padding: 0;
  margin: 20px auto;
`;

const Grid = styled.div`
  padding: 0;
  display:flex;
  flex-wrap: wrap;
  min-width:300px;
  margin: 0 auto;
`;

const Cell = styled.div`
  min-width: 280px;
  width: 22%;
  margin: 10px auto;
`;

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

  // onDragEnd = result => {};

  render() {
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
        <h2 style={{ fontFamily: "Permanent Marker, cursive" }}>Admin Cards</h2>
        {/* <DragDropContext onDragEnd={this.onDragEnd}> */}
          <Container>
            <Grid>
              {/* <Droppable> */}
              <Cell className="column" id="1">
                Valider
                {validate}
              </Cell>
              {/*</Droppable>
             <Droppable>  */}
              <Cell className="column" id="2">
                To Do
                {todo}
              </Cell>
              {/* </Droppable>
            <Droppable> */}
              <Cell className="column" id="3">
                Doing
                {doing}
              </Cell>
              {/* </Droppable>
            <Droppable> */}
              <Cell className="column" id="4">
                Done
                {done}
              </Cell>
              {/* </Droppable> */}
            </Grid>
          </Container>
        {/* </DragDropContext> */}
      </div>
    );
  }
}

export default AdminCards;