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
    handleClose = () => this.setState({ open: false })
    
    handleCheckItem = (obj) => {
        this.props.handleCheck(obj)
    }
    render() {
        const { todos, sortTodos } = this.props;
        const { open } = this.state;
        const staticHeader =  ['name', 'title', 'completed']; 
    return (
        <div >
        <Dropdown text='ToDoList' className="dropDownTittle">
            <Dropdown.Menu >
                <Dropdown.Item 
                    text="ToDoList" 
                    onClick={(event) => {                        
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
                            staticHeader.map((el, index) => {
                                return (
                                    <GridColumn 
                                        key={index}
                                        width={index > 1 ? 4 : 6}  // на момент написания кода в масиве всего 3 эл. => общая сума должна быть 16, колонки разбиты на 6,6,4
                                        textAlign="center" 
                                        onClick={() => {
                                            sortTodos(todos, `${el}`);
                                            }
                                        }
                                        className={`${el}Header`}
                                        title='Push Me'
                                    >
                                        {el} 
                                    </GridColumn>
                                )
                            })
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
