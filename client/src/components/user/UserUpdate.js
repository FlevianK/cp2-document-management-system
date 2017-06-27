import React from 'react';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import Form from '../../containers/form';
import { Forms, DashboardHeader } from '../../containers';
import * as userAction from '../../actions/userAction';
import PropTypes from 'prop-types'; 
import { browserHistory } from 'react-router';

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
    this.props.actions.loadUser(this.props.params)
  }

  onUserChange(event) {
    event.preventDefault();
    const field = event.target.name;
    const users = this.state.users;
    users[field] = event.target.value;
    return this.setState({ users: users });
  }

  onUserSave(event) {
    event.preventDefault();
    this.props.actions.updateUser(this.state.users);
    browserHistory.push('/users')
  }

  render() {
    // const user = this.props.users;
    const token = localStorage.jwt;
    const role = token && jwtDecode(token);
    return (
      <div className="col-md-12">
        <DashboardHeader />
        <form>
          <Form
            name="username"
            label="Username"
            type="text"
            placeholder={this.props.users.firstName}
            onChange={this.onUserChange}
          />

          <Form
            name="firstName"
            label="First Name"
            placeholder={this.props.users.firstName}
            type="text"
            onChange={this.onUserChange} />

          <Form
            name="lastName"
            label="Last name"
            placeholder={this.props.users.lastName}
            type="text"
            onChange={this.onUserChange} />

          <Form
            name="email"
            label="Email ddress"
            placeholder={this.props.users.email}
            type="text"
            onChange={this.onUserChange} />

          <Form
            name="password"
            label="Password"
            type="text"
            placeholder={this.props.users.email}
            onChange={this.onUserChange} />


          {role && role.userRole === "admin"
            ? <Form
              name="title"
              label="Title"
              type="text"
              placeholder={this.props.users.title}
              onChange={this.onUserChange} />
            : ''
          }

          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.onUserSave} />
        </form>
      </div>
    )
  }
}

UserUpdate.PropTypes = {
  users: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserUpdate);
