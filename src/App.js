import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state={
    persons:[
      {id:'1',name:'Max',age:23},
      {id:'2',name:'Sam',age:29},
      {id:'3',name:'Manu',age:32}
    ],
    personVisibility:true
  }
  nameChangedHandler=(event,id)=>{
    const personIndex=this.state.persons.findIndex(p=>{
      return p.id===id;
    });
    const person={
      ...this.state.persons[personIndex]
    };
    person.name=event.target.value;
    const persons=[...this.state.persons];
    persons[personIndex]=person;
    this.setState({
      persons:persons
    });
  }
  deletePersonHandler=(personIndex)=>{
    const persons=[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }
  togglePersonVisiblity=()=>{
    this.setState({personVisibility: !this.state.personVisibility});
  }
  render() {
    let persons=null;
    if(this.state.personVisibility){
      persons=(
        <div>
          {this.state.persons.map((person,index)=>{
            return <Person
                name={person.name}
                age={person.age}
                click={()=>this.deletePersonHandler(index)}
                key={person.id}
                changed={(event)=>this.nameChangedHandler(event,person.id)}
                />
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hello There!</h1>
        <button onClick={this.togglePersonVisiblity}>Toggle Persons Visibility</button>
        {persons}
      </div>
    );
  }
}

export default App;