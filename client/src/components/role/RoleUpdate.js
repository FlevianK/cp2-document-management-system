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
import { Input } from '../../containers';
import * as roleAction from '../../actions/roleAction';
import DashboardHeader from '../common/DashboardHeader';

export class RoleUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: {
        roleId: this.props.params.roleId
      },
      open: true
    };
    this.onRoleChange = this.onRoleChange.bind(this);
    this.onRoleUpdate = this.onRoleUpdate.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount() {
    this.props.actions.loadRole(this.props.params);
  }

  componentWillReceiveProps(nextProps) {
    const role = nextProps.roles;
    this.setState({
      roles: role
    });
  }

  onRoleChange(event) {
    event.preventDefault();
    const field = event.target.name;
    const roles = this.state.roles;
    roles[field] = event.target.value;
    return this.setState({ roles });
  }

  onRoleUpdate(event) {
    event.preventDefault();
    this.props.actions.updateRole(this.state.roles)
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
    console.log(this.props, "llll")
    const { roles } = this.props;
    const actions = [
      <FlatButton
        style={{ color: "red", margin: " 0 15% 0 15%", padding: " 0 4% 0 4% " }}
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        style={{ color: "green", margin: " 0 15% 0 15%", padding: " 0 4% 0 4% " }}
        label="Update"
        primary={true}
        keyboardFocused={true}
        onClick={this.onRoleUpdate}
      />];
    return (
      <div>
        <DashboardHeader />
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
                  <p>Role: {this.state.roles.title}</p>
                </div>
              </div>
              <form>
                <Input
                  name="description"
                  label="Description"
                  type="text"
                  value={this.state.roles.description}
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
RoleUpdate.propTypes = {
  roles: PropTypes.object,
  actions: PropTypes.object,
  params: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  roles: state.roles
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(roleAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(RoleUpdate);
