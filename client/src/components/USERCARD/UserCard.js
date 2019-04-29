import React from 'react'
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import "./UserCard.css";

const UserCard = (props) => {
    const {title , text, status} = props

    function showDetails() {
    console.log("details")
    } 
    
    return (
        <Card shadow={5} style={{width: '100%', height: 'auto', marginTop: '20px'}}>
            <CardTitle style={{backgroundColor: "#2c3e50", color:"white"}}>
                <h2 style={{ width:"100%", margin:"0",lineHeight:"inherit", fontSize:"16px"}}>
                    {title}
                </h2>
            </CardTitle>
            <CardTitle style={{backgroundColor: "#e67e22", color:"black"}}>
            <h2 style={{margin:"0 auto",lineHeight:"inherit", fontSize:"14px"}}>
                    {status}
                </h2>
            </CardTitle>
            <CardText style={{padding:"inherit",width:"100%",height: '100%', color: "black", fontSize:"12px"}}>
                {text}
            </CardText>
            <CardActions border style={{backgroundColor: "#2c3e50", color:"white",bottom:0, position:"absolute"}}>
                <Button colored style={{color:"white"}} onClick={showDetails}>
                    View
                </Button>
            </CardActions>
        </Card> 
    );
};



export default UserCard;