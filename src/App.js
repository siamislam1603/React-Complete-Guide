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
  switchNameHandler=(newName)=>{
    this.setState({
      persons:[
        {name:newName,age:23},
        {name:'Samuel',age:29},
        {name:'Manuer',age:32}
      ]
    });
  }
  nameChangedHandler=(event)=>{
    this.setState({
      persons:[
        {name:'Max',age:23},
        {name:event.target.value,age:29},
        {name:'Manuer',age:32}
      ]
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello There!</h1>
        <button onClick={()=>this.switchNameHandler('Maximilian')}>Switch names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person
         name={this.state.persons[1].name}
         age={this.state.persons[1].age}
         click={this.switchNameHandler.bind(this,'Maxi')}
         changed={this.nameChangedHandler} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My Hobbies:Gandening</Person>
      </div>
    );
  }
}

export default App;