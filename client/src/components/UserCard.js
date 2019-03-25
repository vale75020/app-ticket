import React from 'react'
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl'

const UserCard = (props) => {
    const {title , text, step} = props

    function showDetails() {
    console.log("details")
    } 
    
    return (
        <div>
        <Card shadow={0} style={{width: '320px', height: '300px', margin: '20px'}}>
        <CardTitle style={{backgroundColor: "black", color:"white"}}>{title}</CardTitle>
        <CardTitle style={{backgroundColor: "yellow", color:"black"}}>{step}</CardTitle>
        <CardText style={{height: '200px',overflow: 'hidden', textOverflow: 'ellipsis', color: "black"}}>
            {text}
        </CardText>
        <CardActions border style={{backgroundColor: "black", color:"white"}}>
            <Button colored style={{color:"white"}} onClick={showDetails}>View</Button>
        </CardActions>
    </Card>
        </div>
    );
};



export default UserCard;