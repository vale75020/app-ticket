import React, { Component } from "react";
import { Card, CardTitle, CardText, CardActions, Button } from "react-mdl";
import "./UserCard.css";
import cardTab from "../cardTab";

class UserCard extends Component {
  state = {
    isOpen: false,
    cards: cardTab
  };

  showDetails = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  
  render() {
    const { title, text, status ,id } = this.props;
    const mystyle = this.state.isOpen
      ? { width: "100%", height: "auto", marginTop: "20px" }
      : { width: "100%", height: "auto", maxHeight: "300px", marginTop: "20px" };

    return (
      <Card shadow={5} style={mystyle}>
        <CardTitle style={{ backgroundColor: "#2c3e50", color: "white" }}>
          <h2
            style={{
              width: "100%",
              margin: "0",
              lineHeight: "inherit",
              fontSize: "16px"
            }}
          >
            {title}
          </h2>
        </CardTitle>
        <CardTitle style={{ backgroundColor: "#e67e22", color: "black" }}>
          <h2
            style={{
              margin: "0 auto",
              lineHeight: "inherit",
              fontSize: "14px"
            }}
          >
            {status}
          </h2>
        </CardTitle>
        <CardText
          style={{
            padding: "inherit",
            width: "100%",
            height: "100%",
            color: "black",
            fontSize: "12px"
          }}
        >
          {text}
        </CardText>
        <CardActions
          border
          style={{
            backgroundColor: "#2c3e50",
            color: "white",
            bottom: 0,
            position: "absolute",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          <Button
            colored
            style={{ color: "white", border: "1px solid white", margin: "0 5px" }}
            onClick={this.showDetails}
          >
            View
          </Button>
          <Button
            colored
            style={{ color: "red", border: "1px solid red",  margin: "0 5px" }}
            onClick={() => this.props.onDelete(id)}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default UserCard;
