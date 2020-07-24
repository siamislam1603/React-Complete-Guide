import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state={
    persons:[
      {name:'Max',age:23},
      {name:'Sam',age:29},
      {name:'Manu',age:32}
    ]
  }
  switchNameHandler=()=>{
    this.setState({
      persons:[
        {name:'Maximilian',age:23},
        {name:'Samuel',age:29},
        {name:'Manuer',age:32}
      ]
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello There!</h1>
        <button onClick={this.switchNameHandler}>Switch names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My Hobbies:Gandening</Person>
      </div>
    );
  }
}

export default App;
