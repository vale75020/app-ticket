import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import cardTab from "../cardTab";
import UserCard from "../USERCARD/UserCard";
import AdminLayout from "../ADMINLAYOUT/AdminLayout"
import './AdminCards.css'

class AdminCards extends Component {
  render() {
    const validate = cardTab.map(arg => {
      if (arg.status === "to-validate") {
        return  <UserCard id ={arg.id} title={arg.title} text={arg.text} status={arg.status} />;
      }
    });
    const todo = cardTab.map(arg => {
      if (arg.status === "to-do") {
        return <UserCard id ={arg.id} title={arg.title} text={arg.text} status={arg.status}/>;
      }
    });
    const doing = cardTab.map(arg => {
      if (arg.status === "doing") {
        return  <UserCard id ={arg.id} title={arg.title} text={arg.text} status={arg.status}/>;
      }
    });
    const done = cardTab.map(arg => {
      if (arg.status === "done") {
        return <UserCard id ={arg.id} title={arg.title} text={arg.text} status={arg.status}/>;
      }
    });
    return (
      <div>
        <AdminLayout />
          <h1>Admin Cards</h1>
        <div style={{ width: "90%", margin: "auto", fontSize: "20px",padding:"0" }}>
          <Grid className="demo-grid-ruler" style={{ padding:"0" }}>
            <Cell className="column" col={3}>
              Valider
              {validate}
            </Cell>
              <Cell className="column" col={3}>
              To Do 
              {todo}
            </Cell>
            <Cell className="column" col={3}>
              Doing
              {doing}
            </Cell>
            <Cell className="column" col={3}>
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
