import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { Form, DashboardHeader } from '../../containers';
import * as roleAction from '../../actions/roleAction';
import PropTypes from 'prop-types';

export class RoleDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deletedRole: {
        role: this.props.params.role
      }
    };
    this.onRoleSave = this.onRoleSave.bind(this);
  }


  onRoleSave(event) {
    event.preventDefault();
    this.props.actions.deleteRole(this.state.deletedRole);
  }

  render() {
    return (
      <div className="col-md-12">
        <DashboardHeader />
        <form>
          <Form
            value={this.props.params.role} />

          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.onRoleSave} />
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(roleAction, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(RoleDelete);
