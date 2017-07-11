import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { Input } from '../../containers';
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
      }
    };
    this.onRoleChange = this.onRoleChange.bind(this);
    this.onRoleSave = this.onRoleSave.bind(this);
  }

  onRoleChange(event) {
    event.preventDefault();
    const field = event.target.name;
    const newRole = this.state.newRole;
    newRole[field] = event.target.value;
    return this.setState({ newRole });
  }

  onRoleSave(event) {
    event.preventDefault();
    this.props.actions.createRole(this.state.newRole);
    this.props.actions.loadRoles()
      .then(() => browserHistory.push('/roles'))
      .catch(error => toastr.error(error.response.data.message));
  }

  render() {
    return (
      <div className="col-md-12">
        <DashboardHeader />
        <form>
          <Input
            name="title"
            type="text"
            label="Role"
            onChange={this.onRoleChange}
          />

          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.onRoleSave}
          />
        </form>
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
