import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { Input } from '../../containers';
import DashboardHeader from './../DashboardHeader';
import * as userAction from '../../actions/userAction';
import PropTypes from 'prop-types';
import toastr from 'toastr';

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
    return this.setState({ newUser });
  }

  onUserSave(event) {
    event.preventDefault();
    this.props.actions.createUser(this.state.newUser)
      .then(() => browserHistory.push('/'))
      .catch((error) => {
        toastr.error(error.response.data.message);
      });
  }
  render() {
    return (
      <div>
        <nav style={{ backgroundColor: "green", color: "white", textAlign: "center" }}>
          DOCUMENT MANAGEMENT SYSTEM
        </nav>
        <div className="row">
          <div className="col s6 offset-m3">
            <h5 style={{ color: "green", textAlign: "center" }}>Register</h5>
          </div>
        </div>
        <form style={{ margin: "0 20% 0 20% " }}>
          <Input
            name="username"
            label="Username"
            type="text"
            onChange={this.onUserChange}
          />

          <Input
            name="firstName"
            label="First Name"
            type="text"
            onChange={this.onUserChange}
          />

          <Input
            name="lastName"
            label="Last name"
            type="text"
            onChange={this.onUserChange}
          />

          <Input
            name="email"
            label="Email Address"
            type="text"
            onChange={this.onUserChange}
          />

          <Input
            name="password"
            label="Password"
            type="password"
            onChange={this.onUserChange}
          />

          <div className="row">
            <div className="col s6 offset-m3">
              <input
                style={{ backgroundColor: "green", color: "white" }}
                type="submit"
                className="btn btn-primary"
                onClick={this.onUserSave}
              />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col s6 offset-m3">
            <p className="center medium-small sign-in">
              <Link to="/" activeClassName="active" style={{ color: 'green', textAlign: "center" }}>Sign in</Link> if you already have an account
            </p>
          </div>
        </div>
      </div>
    );
  }
}

UserCreate.propTypes = {
  actions: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(userAction, dispatch)
});

export default connect(null, mapDispatchToProps)(UserCreate);
