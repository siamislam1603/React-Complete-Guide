import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium,{ StyleRoot } from 'radium';

class App extends Component {
  state={
    persons:[
      {id:'1',name:'Max',age:23},
      {id:'2',name:'Sam',age:29},
      {id:'3',name:'Manu',age:32}
    ],
    personVisibility:false
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
    const style={
      backgroundColor:'green',
      color:'white',
      outline:'none',
      borderRadius:'16px',
      padding:'10px',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
    }
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
      style.backgroundColor='red';
      style[':hover']={
        backgroundColor:'salmon',
        color:'black'
      };
    }
    const classes=[];
    if(this.state.persons.length<=2){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }
    return (
      <StyleRoot>
        <div className="App">
          <h1 className={classes.join(' ')}>Hello There!</h1>
          <button onClick={this.togglePersonVisiblity} style={style}>Toggle Persons Visibility</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);