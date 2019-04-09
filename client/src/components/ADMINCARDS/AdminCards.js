import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import cardTab from "../cardTab";
import UserCard from "../UserCard";

class AdminCards extends Component {
  render() {
    const validate = cardTab.map(arg => {
      if (arg.step === "to-validate") {
        return  <UserCard id ={arg.id} title={arg.title} text={arg.text} step={arg.step} />;
      }
    });
    const todo = cardTab.map(arg => {
      if (arg.step === "to-do") {
        return <UserCard id ={arg.id} title={arg.title} text={arg.text} step={arg.step}/>;
      }
    });
    const doing = cardTab.map(arg => {
      if (arg.step === "doing") {
        return  <UserCard id ={arg.id} title={arg.title} text={arg.text} step={arg.step}/>;
      }
    });
    const done = cardTab.map(arg => {
      if (arg.step === "done") {
        return <UserCard id ={arg.id} title={arg.title} text={arg.text} step={arg.step}/>;
      }
    });
    return (
      <div>
          <h1>Admin Cards</h1>
        <div style={{ width: "90%", margin: "auto", fontSize: "20px" }}>
          <Grid className="demo-grid-ruler">
            <Cell
              style={{
                borderRadius:"10px",
                backgroundColor: "#7f8c8d",
                height: "auto",
                padding: "10px",
                minWidth: "360px",
                minWidth:"320px", 
                margin:"0 auto"
              }}
              col={3}
            >
              Valider
              {validate}
            </Cell>
            <Cell
              style={{
                borderRadius:"10px",
                backgroundColor: "#7f8c8d",
                height: "auto",
                padding: "10px",
                minWidth: "360px",
                minWidth:"320px", 
                margin:"0 auto"
              }}
              col={3}
            >
              To Do {todo}
            </Cell>
            <Cell
              style={{
                borderRadius:"10px",
                backgroundColor: "#7f8c8d",
                height: "auto",
                padding: "10px",
                minWidth: "360px",
                minWidth:"320px", 
                margin:"0 auto"
              }}
              col={3}
            >
              Doing
              {doing}
            </Cell>
            <Cell
              style={{
                borderRadius:"10px",
                backgroundColor: "#7f8c8d",
                height: "auto",
                padding: "10px",
                minWidth: "360px",
                minWidth:"320px", 
                margin:"0 auto"
              }}
              col={3}
            >
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
