import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import { ToDoItem } from './ToDoItem';



export class ToDoList  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [...this.props.users],
            todos: [...this.props.todos]
        }
    }
    sortTodos = (todos, sortField) => {
        const callbackMap = {
            title: (a,b) => a.title.localeCompare(b.title),
            // name: (a,b) => a.user.name.localeCompare(b.user.name),
            completed: (a,b) => a.completed - b.completed
        }
        const callback = callbackMap[sortField] || callbackMap.title;
        // console.log(todos);
        return todos.sort(callback);
    }
    render() {
        const { todos, users } = this.props;
    return (
        <>
        <Grid>
            <Grid.Row>
                <GridColumn computer={6} textAlign="center" onClick={() => this.sortTodos(todos, 'name')}>Name</GridColumn>
                <GridColumn computer={6} textAlign="center" onClick={() => this.sortTodos(todos, 'title')}>Title</GridColumn>
                <GridColumn computer={4} textAlign="center" onClick={() => this.sortTodos(todos, 'completed')}>Completed</GridColumn>
            </Grid.Row>
        </Grid>
        <Grid>
        {
            todos.map((todoEl, index) => (
                <ToDoItem 
                    key={index}
                    name={users.find(userEl => userEl.id === todoEl.userId).name}
                    title={todoEl.title}
                    completed={todoEl.completed}
                />
            ))
        }
        </Grid>
        </>
    )
    }
}
