import React from 'react';
import './App.css';
import { getTodos, getUsers } from './api';
import { ToDoList } from './ToDoList';
import { Button } from 'semantic-ui-react';
import { sortTodos } from './sortTodos';

class  App extends React.Component {
  state = {
    todos: [],
    load: false,
    buttonInnerText: 'Load Information',
    disableButton: false
  }
  sortedList = (array,sortField) => {
    this.setState({ todos: sortTodos(array, sortField) })
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
    const fullArr = [ ...todos];

    fullArr.map(el => el.user = users.find(user => user.id === el.userId));
    this.setState({
      todos: fullArr,
      load: true
    });
  }
  render() {
    const { todos } = this.state;
    return (
      <div className="App">
       {
         this.state.load ?                   
        <ToDoList
          todos={todos}
          sortTodos={this.sortedList}
        /> :
        <Button 
          color="green"
          inverted
          onClick={() => this.loadInformation()}
          disabled={this.state.disableButton}
        > 
          {this.state.buttonInnerText}
        </Button> 
       }
      </div>
    );
  }
}

export default App;