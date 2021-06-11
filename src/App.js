import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './AddUser.js';
import UsersList from './UsersList.js'

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  
  state = {
    newUserExists: false,
    users: []
  }
  
  addUser = (event, user) => {
    event.preventDefault()
    if (this.state.users.filter(usr => usr.username === user.username).length === 0)
      this.setState(currentState => ({
        users: [...currentState.users, user],
        newUserExists: false
      }))
    else
      this.setState(currentState => ({
        newUserExists: true
      }))
  }
  
  render() {
    const {users, newUserExists} = this.state
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<AddUser addUser={this.addUser} />
		
		{ newUserExists && (
         	<p style={{color: 'red'}}>This user already exists</p>
         ) }
		
		<UsersList users={users} />
      </div>

    );
  }
}

export default App;
