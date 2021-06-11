import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component{
  state = {
    firstName: '',
    lastName: '',
    username: '',
    played: 0
  }
  
  updateState = (field, event) => {
    this.setState({[field]: event.target.value})
  }
  
  formIsKO = () => {
    return this.state.firstName.trim() === '' || this.state.lastName.trim() === '' || this.state.username.trim() === '' 
  }
  
  render(){
    
    const {firstName, lastName, username} = this.state
    
    return(
      	<form onSubmit={(event) => this.props.addUser(event, this.state)}>
			<h2>Add a user</h2>
			<input
				type='text'
				placeholder='Enter your first name'
				value={firstName}
				onChange={(event) => this.updateState('firstName', event)}
			/><br/>
			<input
				type='text'
				placeholder='Enter your last name'
				value={lastName}
				onChange={(event) => this.updateState('lastName', event)}
			/><br/>
			<input
				type='text'
				placeholder='Enter your username'
				value={username}
				onChange={(event) => this.updateState('username', event)}
			/><br/>
			<button disabled={this.formIsKO()}>Add</button>
		</form>
    )
  }
}

AddUser.propTypes = {
  addUser: PropTypes.func.isRequired,
}

export default AddUser;