import React from 'react';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { Input, SelectOptions } from '../../containers';
import DashboardHeader from './../DashboardHeader';
import * as userAction from '../../actions/userAction';
import * as roleAction from '../../actions/roleAction';
import PropTypes from 'prop-types';

export class UserUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {
        userId: this.props.params.userId
      }
    };
    this.onUserSave = this.onUserSave.bind(this);
    this.onUserChange = this.onUserChange.bind(this);
  }

  componentWillMount() {
    this.props.actions.loadUser(this.props.params);
    this.props.action.loadRoles();
  }

  onUserChange(event) {
    event.preventDefault();
    const field = event.target.name;
    const users = this.state.users;
    users[field] = event.target.value;
    return this.setState({ users });
  }


  onUserSave(event) {
    event.preventDefault();
    this.props.actions.updateUser(this.state.users);
    this.props.actions.loadUsersPage().then(() => browserHistory.push('/users'));
  }

  render() {
    // const user = this.props.users;
    const token = localStorage.jwt;
    const role = token && jwtDecode(token);
    return (
      <div className="col-md-12">
        <DashboardHeader />
        <form>
          <Input
            name="username"
            label="Username"
            type="text"
            value={this.props.users.firstName}
            onChange={this.onUserChange}
          />

          <Input
            name="firstName"
            label="First Name"
            value={this.props.users.firstName}
            type="text"
            onChange={this.onUserChange}
          />

          <Input
            name="lastName"
            label="Last name"
            value={this.props.users.lastName}
            type="text"
            onChange={this.onUserChange}
          />

          <Input
            name="email"
            label="Email ddress"
            value={this.props.users.email}
            type="text"
            onChange={this.onUserChange}
          />

          <Input
            name="password"
            label="Password"
            type="text"
            value={this.props.users.password}
            onChange={this.onUserChange}
          />


          {role && role.userRole === 'admin'
            ? <SelectOptions
              options={this.props.roles}
              name="title"
              label="Title"
              defaultOption="Select role"
              value={this.props.users.title}
              onChange={this.onUserChange}
            />
            : ''
          }

          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.onUserSave}
          />
        </form>
      </div>
    );
  }
}

UserUpdate.propTypes = {
  users: PropTypes.object.isRequired,
  role: PropTypes.object.isRequired,
  roles: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  action: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const roleDropdownData = state.roles.map(role => ({
    value: role.title,
    text: role.title
  }));
  return {
    users: state.users,
    roles: roleDropdownData
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(userAction, dispatch),
  action: bindActionCreators(roleAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserUpdate);
