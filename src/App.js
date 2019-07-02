import React from 'react';
import './App.css';
import { getTodos, getUsers } from './api';
import { ToDoList } from './ToDoList';
import { Button } from 'semantic-ui-react';
import { sortTodos } from './sortTodos';
import { Users } from './Users';
class  App extends React.Component {
  state = {
    todos: [],
    users: [],
    load: false,
    buttonInnerText: 'Load Data',
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
      users,
      load: true
    });
  }
  handleCheck = (obj) => {
    const copy = { ...obj };
    const copyTodos = this.state.todos;
    
    // сложный способ для понимания =(( , но пока не знаю как можно без мутации state сделать по другому
    let completedTask = copyTodos.find(el => JSON.stringify(el) === JSON.stringify(copy)).completed;
     copyTodos.find(el => JSON.stringify(el) === JSON.stringify(copy)).completed = !completedTask;
    
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