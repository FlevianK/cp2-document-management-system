import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Input, RoleHeader } from '../../containers';
import DashboardHeader from './../DashboardHeader';
import * as roleAction from '../../actions/roleAction';
import PropTypes from 'prop-types';
import toastr from 'toastr';

export class RoleCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newRole: {
        title: ''
      },
      open: true
    };
    this.onRoleChange = this.onRoleChange.bind(this);
    this.onRoleCreate = this.onRoleCreate.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  onRoleChange(event) {
    event.preventDefault();
    const field = event.target.name;
    const newRole = this.state.newRole;
    newRole[field] = event.target.value;
    return this.setState({ newRole });
  }

  onRoleCreate(event) {
    event.preventDefault();
    this.props.actions.createRole(this.state.newRole)
      .then(() => {
        this.setState({ open: false });
        browserHistory.push('/roles');
      })
      .catch((error) => {
        toastr.error(error.response.data.message);
      });
  }

  handleClose() {
    this.setState({ open: false });
    browserHistory.push('/roles');
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
        label="Create"
        primary={true}
        keyboardFocused={true}
        onClick={this.onRoleCreate}
      />];
    return (
      <div className="col-md-12">
        <DashboardHeader />
        <RoleHeader />
        <div>
          <MuiThemeProvider>
            <Dialog
              title="Create a role"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              <form>
                <Input
                  name="title"
                  type="text"
                  label="Role"
                  onChange={this.onRoleChange}
                />
              </form>
            </Dialog>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
RoleCreate.propTypes = {
  actions: PropTypes.object.isRequired
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(roleAction, dispatch)
});

export default connect(null, mapDispatchToProps)(RoleCreate);
