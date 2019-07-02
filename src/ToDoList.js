import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import { ToDoItem } from './ToDoItem';
import { Dropdown, TransitionablePortal } from 'semantic-ui-react';



export class ToDoList  extends React.Component {
    state = {
        name: true,
        title: true,
        completed: true,
        open: false
    }
    handleClose = (event) => {
        // event.stopPropagation();
        this.setState({ open: false })
    }
    handleCheckItem = (obj) => {
        this.props.handleCheck(obj)
    }
    render() {
        const { todos, sortTodos } = this.props;
        const { open } = this.state;
        const staticHeader =  ['name', 'title', 'completed']; 
    return (
        <div >
        <Dropdown text='ToDoList' style={{border: '1px solid rgba(34,36,38,.15)', padding: '10px'}}>
            <Dropdown.Menu >
                <Dropdown.Item 
                    text="ToDoList" 
                    onClick={(event) => {
                        // event.stopPropagation(); 
                        this.setState(prevState => ({open: !prevState.open}))}
                    } 
                />
            </Dropdown.Menu>
        </Dropdown>
        <TransitionablePortal open={open}  onClose={this.handleClose}>
            <div >
                <Grid>
                    <Grid.Row className='headerGrid'>
                        {
                            staticHeader.map((el, index) => (
                            <GridColumn 
                                key={index}
                                width={index > 1 ? 4 : 6}  // на момент написания кода в масиве всего 3 эл. => общая сума должна быть 16, колонки разбиты на 6,6,4
                                textAlign="center" 
                                onClick={() => {
                                    sortTodos(todos, this.state[el] ? `${el}up` : `${el}down`);
                                    this.setState((prevState) => ({[el]: !prevState[el]})); 
                                    }
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
                            handleCheckItem={() => this.handleCheckItem(todoEl)}
                        />
                    ))
                }
                </Grid>
            </div>
        </TransitionablePortal>
        </div>
    )
    }
}
