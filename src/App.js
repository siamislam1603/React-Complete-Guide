import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

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
    let btnCls='';
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
      btnCls=classes.Red;
    }
    const assignedClasses=[];
    if(this.state.persons.length<=2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length<=1){
      assignedClasses.push(classes.bold);
    }
    return (
      <div className={classes.App}>
        <h1 className={assignedClasses.join(' ')}>Hello There!</h1>
        <button className={btnCls} onClick={this.togglePersonVisiblity}>Toggle Persons Visibility</button>
        {persons}
      </div>
    );
  }
}

export default App;