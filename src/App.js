import React from 'react';
import './App.css';
import { getTodos, getUsers } from './api';


class  App extends React.Component {
  state = {

  }
  async componentDidMount() {
    const [ todos, users ] = await Promise.all([
      getTodos(),
      getUsers(),
    ]);
  }
  render() {
    return (
      <div className="App">
          <div>Hello</div>
      </div>
    );
  }
}

export default App;
