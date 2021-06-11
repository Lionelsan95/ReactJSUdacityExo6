import React from 'react'
import User from './User.js'
import PropTypes from 'prop-types';

const UsersList = (props) => (
  	<div>
    	<ol>
      		{props.users.map( (user) => <User key={user.username} username={user.username} played={user.played} />)}
      	</ol>
  	</div>
)

UsersList.propTypes = {
  users: PropTypes.array.isRequired
}

export default UsersList