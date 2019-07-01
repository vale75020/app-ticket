import React, { Component } from "react";
import cardTab from "../cardTab";
import styled from "styled-components";

// import { Draggable } from "react-beautiful-dnd";

const Card = styled.div`
  width: 100%;
  height: auto;
  margin: 10px auto;
  border: 1px solid white;
`;

const CardTitle = styled.h2`
  background-color: #2c3e50;
  width: 100%;
  margin: 0 auto;
  font-size: 16px;
  color: white;
  padding: 5px 0;
`;

const CardTitle2 = styled(CardTitle)`
  background-color: #e67e22;
`;

const TextSmall = styled.div`
  width: 90%;
  color: black;
  font-size: 12px;
  background-color: white;
  max-height: 50px;
  height: auto;
  overflow: hidden;
  padding: 5%;
`;

const TextLarge = styled(TextSmall)`
height: auto;
max-height: min-content;
`

const CardActions = styled.div`
  background-color: #2c3e50;
  color: white;
  bottom: 0;
  padding: 5px;
  display: flex;
  justify-content: space-around;
`;

const ButtonShow = styled.div`
  color: white;
  border: 3px solid white;
  border-radius: 10px;
  margin: 0 5px;
  width: 40%;
  height: 40px;
  font-size: 18px;
  line-height: 40px;
`;

const ButtonDelete = styled(ButtonShow)`
  color: red;
  border: 3px solid red;
`;

class UserCardStyled extends Component {
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
    const CardText = this.state.isOpen ? TextLarge : TextSmall;

    return (
      // <Draggable>
      <Card>
        <CardTitle>{title}</CardTitle>
        <CardTitle2>{status}</CardTitle2>
        <CardText>{text}</CardText>
        <CardActions>
          <ButtonShow onClick={this.showDetails}>View</ButtonShow>
          <ButtonDelete onClick={() => this.props.onDelete(id)}>
            Remove
          </ButtonDelete>
        </CardActions>
      </Card>
      // </Draggable>
    );
  }
}

export default UserCardStyled;
