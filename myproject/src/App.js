import React, { Component } from 'react';
import './App.css';
import TodoList from './component/TodoList';
import NavBar from "./component/NavBar"

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <NavBar/>
        <TodoList/>

      </div>
    );
  }
}

export default App;
