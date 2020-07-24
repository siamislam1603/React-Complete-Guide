import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
const App =(props)=> {

  // Array destructuring
  const [personsState,setPersonsState]=useState({
    persons:[
      {name:'Max',age:23},
      {name:'Sam',age:29},
      {name:'Manu',age:32}
    ]
  });
  
  //React hooks doesn't merge old states with changing ones but class based component does
  const [otherState,setOtherState]=useState('some other value');
  console.log(personsState,otherState);

  const switchNameHandler=()=>{
    setPersonsState({
      persons:[
        {name:'Maximilian',age:23},
        {name:'Samuel',age:29},
        {name:'Manuer',age:32}
      ]
    });
  };
  return (
    <div className="App">
      <h1>Hello There!</h1>
      <button onClick={switchNameHandler}>Switch names</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My Hobbies:Gandening</Person>
    </div>
  );
  
}

export default App;
