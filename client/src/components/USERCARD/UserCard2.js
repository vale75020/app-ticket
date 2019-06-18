import React, { Component } from "react";
import cardTab from "../cardTab";
import styled from "styled-components";

// import { Draggable } from "react-beautiful-dnd";

const Card = styled.div`
`;

const CardTitle = styled.h2`
  background-color: #2c3e50;
  width: 100%;
  margin: 0;
  line-height: inherit;
  font-size: 16px;
`;

const CardTitle2 = styled.h2`
  background-color: #e67e22;
  margin: 0 auto;
  line-height: inherit;
  font-size: 14px;
`;

const CardText = styled.div`
  padding: inherit;
  width: 100%;
  height: 100%;
  color: black;
  font-size: 12px;
`;

const CardActions = styled.div`
  background-color: #2c3e50;
  color: white;
  bottom: 0;
  position: absolute;
  display: flex;
  justify-content: space-around;
`;

const ButtonShow = styled.button`
  color: white;
  border: 1px solid white;
  margin: 0 5px;
`;

const ButtonDelete = styled.button`
  color: red;
  border: 1px solid red;
  margin: 0 5px;
`;

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
    const { title, text, status, id } = this.props;
    const mystyle = this.state.isOpen
      ? { width: "100%", height: "auto", marginTop: "20px" }
      : {
          width: "100%",
          height: "auto",
          maxHeight: "300px",
          marginTop: "20px"
        };

    return (
      // <Draggable>
      <Card style={mystyle}>
        <CardTitle>{title}</CardTitle>
        <CardTitle2>{status}</CardTitle2>
        <CardText>{text}</CardText>
        <CardActions>
          <ButtonShow onClick={this.showDetails}>View</ButtonShow>
          <ButtonDelete onClick={() => this.props.onDelete(id)}>Remove</ButtonDelete>
        </CardActions>
      </Card>
      // </Draggable>
    );
  }
}

export default UserCard;
