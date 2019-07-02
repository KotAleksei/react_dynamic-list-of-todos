import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import { ToDoItem } from './ToDoItem';



export class ToDoList  extends React.Component {
    state = {
        name: true,
        title: true,
        completed: true,
    }

    render() {
        const { todos, sortTodos } = this.props;
        const staticHeader =  ['name', 'title', 'completed']; 
    return (
        <>
        <Grid>
            <Grid.Row className='headerGrid'>
                {
                    staticHeader.map((el, index) => (
                    <GridColumn 
                        key={index}
                        width={index > 1 ? 4 : 6}  // на момент написания кода в масиве всего 3 эл. => общая сума должна быть 16, колонки разбиты на 6,6,4
                        textAlign="center" 
                        onClick={() => {
                            this.setState((prevState) => ({el: !prevState.el})); 
                            sortTodos(todos, this.state.el ? `${el}up` : `${el}down`)}
                        }
                        className={`${el}Header`}
                        title='Push Me'
                    >
                        {el[0].toUpperCase() + el.slice(1)} 
                    </GridColumn>
                    ))
                }
            </Grid.Row>
        </Grid>
        <Grid>
        {
            todos.map((todoEl, index) => (
                <ToDoItem 
                    key={index}
                    name={todoEl.user.name}
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
