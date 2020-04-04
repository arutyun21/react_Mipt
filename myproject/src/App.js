import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import NavBar from "./components/NavBar"
import { BrowserRouter, Route } from 'react-router-dom'
import Projects from './components/Projects';
class App extends Component {
  
  render() {
    return (
        <div className="App">
          <NavBar/>
          <BrowserRouter>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/projects/:project_id" component={TodoList}/>         
          </BrowserRouter>
        </div>      
    );
  }
}

export default App;
