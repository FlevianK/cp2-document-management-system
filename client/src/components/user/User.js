import React from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { UserList, UserHeader } from '../../containers';
import * as userAction from '../../actions/userAction';
import PropTypes from 'prop-types';
import SearchUser from './SearchUser'
 
class User extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      users: [{
        firstName: '',
        lastName: '',
        email: '',
        title: ''
      }]
    };
  }

  componentWillMount() {
    let users;
    this.props.actions.loadUsers()
  }

  render () {
    return (
      <div className="col-md-12">
        <h1>Users</h1>
        <UserHeader />
        <SearchUser />
        <UserList users={this.props.users} />
      </div>
    )
  }
}

User.PropTypes = {
  users: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps){
  if (state.users.length > 0) {
    return {
      users: state.users
    };
  } else {
    return {
      users: [{ id: '', firstName: '', lastName: '', email: '', title: '' }]
    };
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
 