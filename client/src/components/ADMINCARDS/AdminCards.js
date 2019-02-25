import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class AdminCards extends Component {
    render() {
        return (
            <div>
                <div style={{width: '80%', margin: 'auto'}}>
    <Grid className="demo-grid-ruler">
        <Cell col={3}>Valider</Cell>
        <Cell col={3}>To Do</Cell>
        <Cell col={3}>Doing</Cell>
        <Cell col={3}>Done</Cell>
    </Grid>
            </div>
            </div>
        );
    }
}

export default AdminCards;