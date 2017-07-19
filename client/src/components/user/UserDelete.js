import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Input, UserHeader } from '../../containers';
import DashboardHeader from '../common/DashboardHeader';
import * as userAction from '../../actions/userAction';

export class UserDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deletedUser: {
        userId: this.props.params.userId
      },
      open: true,
    };
    this.onUserSave = this.onUserSave.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount() {
    this.props.actions.loadUser(this.props.params);
  }
  onUserSave(event) {
    event.preventDefault();
    this.setState({ open: true });
    this.props.actions.deleteUser(this.state.deletedUser)
      .then(() => browserHistory.push('/users'));
  }

  handleClose() {
    this.setState({ open: false });
    browserHistory.push('/users');
  }

  render() {
    const actions = [
      <FlatButton
        style={{color: "red", margin: " 0 15% 0 15%", padding: " 0 4% 0 4% "}}
        label="No"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        style={{color: "green", margin: " 0 15% 0 15%", padding: " 0 4% 0 4% "}}
        label="Yes"
        primary={true}
        keyboardFocused={true}
        onClick={this.onUserSave}
      />]
    return (
      <div className="col-md-12">
        <DashboardHeader />
        <UserHeader />
        <div>
          <MuiThemeProvider>
            <Dialog
              title="Are you sure you want to delete this user?"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              <p>UserName: {this.props.users.username}</p>
              <p>Name: {this.props.users.firstName} {this.props.users.lastName}</p>
              <p>email: {this.props.users.email}</p>
              <p>User role: {this.props.users.title}</p>
            </Dialog>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
UserDelete.propTypes = {
  users: PropTypes.object,
  actions: PropTypes.object,
  params: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(userAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDelete);
