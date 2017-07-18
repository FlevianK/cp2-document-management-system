import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import toastr from 'toastr';
import { RoleHeader } from '../../containers';
import * as roleAction from '../../actions/roleAction';
import PropTypes from 'prop-types';
import DashboardHeader from './../DashboardHeader';

export class RoleDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deletedRole: {
        id: this.props.params.roleId
      },
      open: true
    };
    this.onRoleDelete = this.onRoleDelete.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }


  onRoleDelete(event) {
    event.preventDefault();
    this.setState({ open: false });
    this.props.actions.deleteRole(this.state.deletedRole)
      .then(() => browserHistory.push('/roles'))
      .catch(error => toastr.error(error.response.data.message));
  }
  handleClose() {
    this.setState({ open: false });
    browserHistory.push('/roles');
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
        onClick={this.onRoleDelete}
      />];
    return (
      <div className="col-md-12">
        <DashboardHeader />
        <RoleHeader />
        <div>
          <MuiThemeProvider>
            <Dialog
              title="Are you sure you want to delete this role?"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              <p>Role:  {this.props.params.roleTitle} </p>
            </Dialog>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

RoleDelete.propTypes = {
  actions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(roleAction, dispatch)
});

export default connect(null, mapDispatchToProps)(RoleDelete);
