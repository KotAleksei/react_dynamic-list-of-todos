import React from 'react';
import { Grid, Checkbox } from "semantic-ui-react";

export const ToDoItem = (props) => {
    const { name, title, completed, handleCheckItem } = props;
    return (
        <Grid.Row >
            <Grid.Column width={6} textAlign="center" style={{border: '1px solid grey', padding: '10px'}}>{name}</Grid.Column>
            <Grid.Column width={6} textAlign="center" style={{border: '1px solid grey', padding: '10px'}}>{title}</Grid.Column>
            <Grid.Column width={4} textAlign="center" style={{border: '1px solid grey', padding: '10px'}}>
                <Checkbox checked={completed} onClick={handleCheckItem}/>
            </Grid.Column>
        </Grid.Row>
    )
}
