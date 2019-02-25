import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class AdminCards extends Component {
    render() {
        return (
            <div>
                <div style={{width: '90%', margin: 'auto', fontSize:"20px"}}>
    <Grid className="demo-grid-ruler">
        <Cell  style={{backgroundColor:"grey", height:"100vh", padding:"10px"}} col={3}>Valider</Cell>
        <Cell  style={{backgroundColor:"grey", height:"100vh", padding:"10px"}} col={3}>To Do</Cell>
        <Cell  style={{backgroundColor:"grey", height:"100vh", padding:"10px"}} col={3}>Doing</Cell>
        <Cell  style={{backgroundColor:"grey", height:"100vh", padding:"10px"}} col={3}>Done</Cell>
    </Grid>
            </div>
            </div>
        );
    }
}

export default AdminCards;