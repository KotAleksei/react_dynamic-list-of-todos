import React from 'react';
import './App.css';



class  App extends React.Component {
  state = {

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos ')
      .then(resp => resp.json())
      .then(resp => console.log(resp));
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
