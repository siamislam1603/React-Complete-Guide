import React, { Component } from 'react';
import './App.css';
import UserInputs from './UserInputs/UserInputs'
import UserOutputs from './UserOutputs/UserOutputs'

class App extends Component {
  state={
    name:'Nick'
  }
  userNameChangedHandler=(event)=>{
    this.setState({name:event.target.value})
  }
  render() {
    return (
      <div className="App">
        <UserInputs changed={this.userNameChangedHandler} userName={this.state.name} />
        <UserOutputs userName={this.state.name} />
        <UserOutputs userName={this.state.name} />
        <UserOutputs userName='Max' />
      </div>
    );
  }
}

export default App;
