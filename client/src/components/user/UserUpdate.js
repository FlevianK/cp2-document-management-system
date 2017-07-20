import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import { Input, SelectOptions } from '../../containers';
import DashboardHeader from '../common/DashboardHeader';
import * as userAction from '../../actions/userAction';
import * as roleAction from '../../actions/roleAction';

export class UserUpdate extends React.Component {
  /**
    * UserUpdate class
    * It is for upadating users details excluding user's role
  */
  constructor(props) {
    super(props);
    this.state = {
      users: {
        userId: localStorage.userId
      },
      open: true
    };
    this.onUserUpdate = this.onUserUpdate.bind(this);
    this.onUserChange = this.onUserChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount() {
    this.props.actions.loadUser(this.state.users);
  }

  componentWillReceiveProps(nextProps) {
    const user = nextProps.users;
    this.setState({
      users: user
    });
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
                  value={this.state.users.username}
                  onChange={this.onUserChange}
                />

                <Input
                  name="firstName"
                  label="First name"
                  value={this.state.users.firstName}
                  type="text"
                  onChange={this.onUserChange}
                />

                <Input
                  name="lastName"
                  label="Last name"
                  value={this.state.users.lastName}
                  type="text"
                  onChange={this.onUserChange}
                />

                <Input
                  name="email"
                  label="Email address"
                  value={this.state.users.email}
                  type="text"
                  onChange={this.onUserChange}
                />

                <Input
                  name="password"
                  label="Password"
                  type="password"
                  value={this.state.users.password}
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
  users: PropTypes.object,
  actions: PropTypes.object,
  params: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(userAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserUpdate);
