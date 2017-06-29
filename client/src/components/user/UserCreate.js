import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { Input, DashboardHeader  } from '../../containers';
import * as userAction from '../../actions/userAction';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

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
      },
      errors: {}
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

  userFormIsValid(){
    let formIsValid = true;
    let errors = {};

    if (this.state.newUser.username.length < 1 ) {
      errors.username = 'Username must not be empty';
      formIsValid = false;
    } 
    if (this.state.newUser.firstName.length < 1 ) {
      errors.firstName = 'First name must not be empty';
      formIsValid = false;
    } 
    if (this.state.newUser.lastName.length < 1 ) {
      errors.lastName = 'Surname must not be empty';
      formIsValid = false;
    } 
    if (this.state.newUser.email.length < 1 ) {
      errors.email = 'Email must not be empty';
      formIsValid = false;
    } 
    if (this.state.newUser.password.length < 1 ) {
      errors.password = 'Password not be empty';
      formIsValid = false;
    } 
    this.setState({errors: errors});
    return formIsValid;
  }

  onUserSave(event) {
    event.preventDefault();
    if(!this.userFormIsValid()){
      return;
    }
    this.props.actions.createUser(this.state.newUser).then(()=> browserHistory.push('/'));
  }

  render() {
    return (
      <div>
        <form>
          <Input
            name="username"
            label="Username"
            type="text"
            onChange={this.onUserChange} />

          <Input
            name="firstName"
            label="First Name"
            type="text"
            onChange={this.onUserChange} />

          <Input
            name="lastName"
            label="Surname"
            type="text"
            onChange={this.onUserChange} />

          <Input
            name="email"
            label="Email Address"
            type="text"
            onChange={this.onUserChange} />

          <Input
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
