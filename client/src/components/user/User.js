import React from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { UserList, UserHeader, DashboardHeader } from '../../containers';
import * as userAction from '../../actions/userAction';
import PropTypes from 'prop-types';
import SearchUser from './SearchUser';
 
export class User extends React.Component {
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

  componentDidMount() {
    this.props.actions.loadUsers()
  }
  componentWillReceiveProps(nextProps){
    this.setState({ users: Object.assign({}, nextProps.users)})
  }

  render () {
    return (
      <div className="col-md-12">
        <DashboardHeader />
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
 