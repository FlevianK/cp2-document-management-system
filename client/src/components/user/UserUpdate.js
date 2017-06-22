import React from 'react';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import Form from '../../containers/form';
import { Forms } from '../../containers';
import * as userAction from '../../actions/userAction';
import PropTypes from 'prop-types';

class UserUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedUser: []
    };
    this.onUserChange = this.onUserChange.bind(this);
    this.onUserSave = this.onUserSave.bind(this);
  }

  onUserChange(event) {
    event.preventDefault();
    const field = event.target.name;
    const updatedUser = this.state.updatedUser;
    updatedUser[field] = event.target.value;
    return this.setState({ updatedUser: updatedUser });
  }

  onUserSave(event) {
    event.preventDefault();
    this.props.actions.updateUser(this.state.updatedUser);
  }

  render() {
    const token = localStorage.jwt;
    const role = token && jwtDecode(token);
    return (
      <div className="col-md-12">
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


          {role && role.userRole === "admin"
          ? <Form
            name="title"
            label="Title"
            type="text"
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userAction, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(UserUpdate);
