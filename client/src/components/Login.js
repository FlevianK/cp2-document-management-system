import React from 'react';
import { Link, browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginAction from '../actions/loginAction';
import { Input } from '../containers';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginDetails: {
        email: '',
        password: ''
      }
    };
    this.onLoginChange = this.onLoginChange.bind(this);
    this.onLoginSave = this.onLoginSave.bind(this);
  }

  onLoginChange(event) {
    event.preventDefault();
    const field = event.target.name;
    const loginDetails = this.state.loginDetails;
    loginDetails[field] = event.target.value;
    return this.setState({ loginDetails });
  }

  onLoginSave(event) {
    event.preventDefault();
    this.props.actions.loginUser(this.state.loginDetails)
      .then(() => browserHistory.push('/dashboard'))
      .catch((error) => {
        toastr.error(error.response.data.message);
      });
  }

  render() {
    return (
      <div>
        <nav className="col-md-12" style={{ backgroundColor: "green", color: "white", textAlign: "center" }}>
          DOCUMENT MANAGEMENT SYSTEM
        </nav>
        <div className="row">
          <div className="col s6 offset-m3">
            <h5 style={{ color: "green", textAlign: "center" }}>Login</h5>
          </div>
        </div>

        <form style={{margin: "0 20% 0 20% "}}>
          <Input
            name="email"
            label="email"
            onChange={this.onLoginChange}
          />

          <Input
            name="password"
            label="password"
            type="password"
            onChange={this.onLoginChange}
          />

          <div className="row">
            <div className="col s6 offset-m3">

              <input
                style={{ backgroundColor: "green", color: "white" }}
                type="submit"
                className="btn btn-primary"
                onClick={this.onLoginSave}
              />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col s6 offset-m3">
            <p className="center medium-small sign-up">
              <Link to="/users/create" activeClassName="active" style={{ color: 'green', textAlign: "center" }}> Sign up</Link> to create account
            </p>
          </div>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  actions: PropTypes.object
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(loginAction, dispatch)
});

export default connect(null, mapDispatchToProps)(Login);
