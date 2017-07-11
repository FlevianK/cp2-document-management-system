import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import { Input } from '../../containers';
import * as roleAction from '../../actions/roleAction';
import PropTypes from 'prop-types';
import DashboardHeader from './../DashboardHeader';

export class RoleDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deletedRole: {
        role: this.props.params.roleTitle
      }
    };
    this.onRoleSave = this.onRoleSave.bind(this);
  }


  onRoleSave(event) {
    event.preventDefault();
    this.props.actions.deleteRole(this.state.deletedRole);
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
            value={this.props.params.roleTitle}
            label="User role"
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

RoleDelete.propTypes = {
  actions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(roleAction, dispatch)
});

export default connect(null, mapDispatchToProps)(RoleDelete);
