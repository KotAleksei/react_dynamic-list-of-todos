import React from 'react';
import './App.css';
import { getTodos, getUsers } from './api';
import { ToDoList } from './ToDoList';


class  App extends React.Component {
  state = {
    todos: [],
    users: [],
  }
  async componentDidMount() {
    const [ todos, users ] = await Promise.all([
      getTodos(),
      getUsers(),
    ]);
    this.setState({
      todos,
      users
    });
  }
  render() {
    const { todos, users } = this.state;
    console.log(todos, users);
    return (
      <div className="App">
          <ToDoList
            users={users}
            todos={todos}
          />
      </div>
    );
  }
}

export default App;
