import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello There!</h1>
        <Person name="Max" age="23" />
        <Person name="Sam" age="29" />
        <Person name="Xung" age="32">My Hobbies:Gandening</Person>
      </div>
    );
  }
}

export default App;
