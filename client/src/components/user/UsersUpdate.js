import React from 'react';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import { Input, SelectOptions, UserHeader } from '../../containers';
import DashboardHeader from '../common/DashboardHeader';
import * as userAction from '../../actions/userAction';
import * as roleAction from '../../actions/roleAction';

export class UsersUpdate extends React.Component {
  /**
    * UsersUpdate class
    * It is for upadating user's role
  */
  constructor(props) {
    super(props);
    this.state = {
      users: {
        userId: this.props.params.userId
      },
      open: true,
    };
    this.onUserUpdate = this.onUserUpdate.bind(this);
    this.onUserChange = this.onUserChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount() {
    this.props.actions.loadUser(this.props.params);
    this.props.action.loadRoles();
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
    this.setState({ open: false });
    this.props.actions.updateUser(this.state.users)
      .then(() =>{
        this.setState({ open: false });
        browserHistory.push('/users');
      })
      .catch((error) => {
        toastr.error(error.response.data.message);
      });
  }

  handleClose() {
    this.setState({ open: false });
    browserHistory.push('/users');
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
        <UserHeader />
        <div>
          <MuiThemeProvider>
            <Dialog
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              <div className="row">
                <div className="col s10 offset-m1">
                  <p>UserName: {this.props.users.username}</p>
                  <p>Name: {this.props.users.firstName} {this.props.users.lastName}</p>
                  <p>email: {this.props.users.email}</p>
                  <p>User role: {this.props.users.title}</p>
                </div>
              </div>
              <form>
                <SelectOptions
                  options={this.props.roles}
                  name="title"
                  label="Role"
                  defaultOption="Select role"
                  value={this.state.users.title}
                  onChange={this.onUserChange}
                />
              </form>
            </Dialog>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
UsersUpdate.propTypes = {
  users: PropTypes.object,
  role: PropTypes.object,
  roles: PropTypes.object,
  actions: PropTypes.object,
  params: PropTypes.object,
  action: PropTypes.object
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersUpdate);
