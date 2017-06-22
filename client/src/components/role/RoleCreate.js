import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { Form } from '../../containers';
import * as roleAction from '../../actions/roleAction';
import PropTypes from 'prop-types';

class RoleCreate extends React.Component {
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
    return this.setState({ newRole: newRole });
  }

  onRoleSave(event) {
    event.preventDefault();
    this.props.actions.createRole(this.state.newRole);
  }

  render() {
    return (
      <div className="col-md-12">
        <form>
          <Form
            name="title"
            type="text"
            onChange={this.onRoleChange} />

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

export default connect(null, mapDispatchToProps)(RoleCreate);
