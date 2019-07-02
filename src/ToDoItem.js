import React from 'react';
import { Grid, Checkbox } from "semantic-ui-react";

export const ToDoItem = (props) => {
    const { name, title, completed } = props;
    return (
        <Grid.Row>
            <Grid.Column width={6} textAlign="center">{name}</Grid.Column>
            <Grid.Column width={6} textAlign="center">{title}</Grid.Column>
            <Grid.Column width={4} textAlign="center">
                <Checkbox checked={completed} />
            </Grid.Column>
        </Grid.Row>
    )
}
