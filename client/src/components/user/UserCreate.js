import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { Form, DashboardHeader  } from '../../containers';
import * as userAction from '../../actions/userAction';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';

export class UserCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    };
    this.onUserChange = this.onUserChange.bind(this);
    this.onUserSave = this.onUserSave.bind(this);
  }

  onUserChange(event) {
    event.preventDefault();
    const field = event.target.name;
    const newUser = this.state.newUser;
    newUser[field] = event.target.value;
    return this.setState({ newUser: newUser });
  }

  onUserSave(event) {
    event.preventDefault();
    this.props.actions.createUser(this.state.newUser);
  }

  render() {
    const token = localStorage.jwt;
    const role = token && jwtDecode(token);
    return (
      <div>
        {role && role.userRole === "admin"
          ? <DashboardHeader />
          : ''
        }
        <form>
          <Form
            name="username"
            label="Username"
            type="text"
            onChange={this.onUserChange} />

          <Form
            name="firstName"
            label="First Name"
            type="text"
            onChange={this.onUserChange} />

          <Form
            name="lastName"
            label="Surname"
            type="text"
            onChange={this.onUserChange} />

          <Form
            name="email"
            label="Email Address"
            type="text"
            onChange={this.onUserChange} />

          <Form
            name="password"
            label="Password"
            type="text"
            onChange={this.onUserChange} />

          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.onUserSave} />
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userAction, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(UserCreate);
