import React from 'react';
import './App.css';
import { getTodos, getUsers } from './api';
import { ToDoList } from './components/ToDoList';
import { Button } from 'semantic-ui-react';
import { sortTodos } from './components/sortTodos';
import { Users } from './components/Users';
class  App extends React.Component {
  state = {
    todos: [],
    users: [],
    load: false,
    buttonInnerText: 'Load Data',
    disableButton: false,
    sortDirection: 1
  }
  sortedList = (array,sortField) => {
    const { sortDirection } = this.state;
    this.setState((prevState) => ({ 
      todos: sortTodos(array, sortField, sortDirection), 
      sortDirection: -prevState.sortDirection
    }))
  }
  async loadInformation() {
    this.setState({
      disableButton: true,
      buttonInnerText: "Loading...",
    });
    const [ todos, users ] = await Promise.all([
      getTodos(),
      getUsers(),
    ]);
    const fullArr =  todos.map(el => ({
      ...el,
      user: users.find(user => user.id === el.userId)
    }));

    this.setState({
      todos: fullArr,
      users,
      load: true
    });
  }
  handleCheck = (obj) => {
    const copy = { ...obj };
    const copyTodos  = [ ...this.state.todos ];

    let completedTask = copyTodos.find(el => el.id === copy.id).completed;
     copyTodos.find(el => el.id === copy.id).completed = !completedTask;
    
    this.setState({todos: copyTodos})
  }
  render() {
    const { todos,users } = this.state;
    return (
      <div className="App">
       {
         this.state.load ?
          <div className="parentUsersToDo">
            <Users users={users}/>           
            <ToDoList
              todos={todos}
              sortTodos={this.sortedList}
              handleCheck={this.handleCheck}
            /> 
          </div> :
          <Button 
            className="loadButton"
            color="green"
            inverted
            onClick={() => this.loadInformation()}
            disabled={this.state.disableButton}
            size='big'
          > 
            {this.state.buttonInnerText}
          </Button> 
       }
      </div>
    );
  }
}

export default App;