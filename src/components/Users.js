import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    const users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>)
    return (
      <div>
        <ul>
          {this.props.userCount}
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users,
  userCount: state.users.length };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users);
