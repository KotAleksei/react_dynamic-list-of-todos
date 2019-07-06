import React from 'react';
import { Grid, Checkbox } from "semantic-ui-react";

export const ToDoItem = (props) => {
    const { name, title, completed, handleCheckItem } = props;
    return (
        <Grid.Row >
            <Grid.Column width={6} className="toDoItemColumnStyle">{name}</Grid.Column>
            <Grid.Column width={6} className="toDoItemColumnStyle">{title}</Grid.Column>
            <Grid.Column width={4} className="toDoItemColumnStyle">
                <Checkbox checked={completed} onClick={handleCheckItem}/>
            </Grid.Column>
        </Grid.Row>
    )
}
