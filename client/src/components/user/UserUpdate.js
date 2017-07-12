import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Input, SelectOptions } from '../../containers';
import DashboardHeader from './../DashboardHeader';
import * as userAction from '../../actions/userAction';
import * as roleAction from '../../actions/roleAction';
import PropTypes from 'prop-types';
import toastr from 'toastr';

export class UserUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {
        userId: this.props.loginUser.userId
      },
      open: true
    };
    this.onUserUpdate = this.onUserUpdate.bind(this);
    this.onUserChange = this.onUserChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount() {
    this.props.actions.loadUser(this.props.loginUser);
  }

  onUserChange(event) {
    event.preventDefault();
    const field = event.target.name;
    const users = this.state.users;
    users[field] = event.target.value;
    return this.setState({ users });
  }

  onUserUpdate(event) {
    event.preventDefault();
    this.props.actions.updateUser(this.state.users)
      .then(() => {
        this.setState({ open: false });
        browserHistory.push('/documents');
      })
      .catch((error) => {
        toastr.error(error.response.data.message);
      });
  }

  handleClose() {
    this.setState({ open: false });
    browserHistory.push('/documents');
  }
  render() {
    const actions = [
      <FlatButton
        style={{color: "red", margin: " 0 15% 0 15%", padding: " 0 4% 0 4% "}}
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        style={{color: "green", margin: " 0 15% 0 15%", padding: " 0 4% 0 4% "}}
        label="Update"
        primary={true}
        keyboardFocused={true}
        onClick={this.onUserUpdate}
      />];
    return (
      <div className="col-md-12">
        <DashboardHeader />
        <div>
          <MuiThemeProvider>
            <Dialog
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              <form>
                <Input
                  name="username"
                  label="Username"
                  type="text"
                  placeholder={this.props.users.username}
                  onChange={this.onUserChange}
                />

                <Input
                  name="firstName"
                  label="First name"
                  placeholder={this.props.users.firstName}
                  type="text"
                  onChange={this.onUserChange}
                />

                <Input
                  name="lastName"
                  label="Last name"
                  placeholder={this.props.users.lastName}
                  type="text"
                  onChange={this.onUserChange}
                />

                <Input
                  name="email"
                  label="Email address"
                  placeholder={this.props.users.email}
                  type="text"
                  onChange={this.onUserChange}
                />

                <Input
                  name="password"
                  label="Password"
                  type="text"
                  placeholder={this.props.users.password}
                  onChange={this.onUserChange}
                />
              </form>
            </Dialog>
          </MuiThemeProvider>
        </div>
      </div >
    );
  }
}

UserUpdate.propTypes = {
  users: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  loginUser: PropTypes.object,
  params: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
    loginUser: state.loginUser
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(userAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserUpdate);
