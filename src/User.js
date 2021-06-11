import React, {Component} from 'react'
import PropTypes from 'prop-types';

class User extends Component{
  	state = {
      show: true
    }
  	toggle = () => {
      this.setState((currentState) => ({show: !currentState.show}))
    }
  	render(){
      const {username, played } = this.props
      const {show} = this.state
      return(
        <li key={username}> 
            {username} played {show ? played:'\\*'} games.        
            <button onClick={this.toggle}>{show ? 'Hide':'Show'}the Number of Games Played</button>
        </li>
		)
	}
}

User.propTypes = {
  username: PropTypes.string.isRequired,
  played: PropTypes.number.isRequired
}
export default User