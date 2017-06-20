import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import Form from '../containers/form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginAction from '../actions/loginAction';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginDetails: {
        email: '',
        password: ''
      }
    }
    this.onLoginChange = this.onLoginChange.bind(this);
    this.onLoginSave = this.onLoginSave.bind(this);
  }

  onLoginChange(event) {
    event.preventDefault();
    const field = event.target.name;
    const loginDetails = this.state.loginDetails;
    loginDetails[field] = event.target.value;
    return this.setState({ loginDetails: loginDetails });
  }

  onLoginSave(event) {
    event.preventDefault();
    this.props.actions.loginUser(this.state.loginDetails); 
  }
  

  render() {
    return (
      <div>
        <form>
          <Form
            name="email"
            label="email"
            value={this.state.loginDetails.email}
            onChange={this.onLoginChange} />

          <Form
            name="password"
            label="password"
            type="password"
            value={this.state.loginDetails.password}
            onChange={this.onLoginChange} />

          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.onLoginSave} />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginAction, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Login);