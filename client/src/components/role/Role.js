import React from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { RoleList, RoleHeader } from '../../containers';
import * as roleAction from '../../actions/roleAction';
import PropTypes from 'prop-types';
 
class Role extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      roles: {
        title: ''
      }
    };
  }

  componentWillMount() {
    let roles;
    this.props.actions.loadRoles()
  }

  render () {
    return (
      <div className="col-md-12">
        <h1>Roles</h1>
        <RoleHeader />
        <RoleList roles={this.props.roles} />
      </div>
    )
  }
}

Role.PropTypes = {
  roles: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps){
  if (state.roles.length > 0) {
    return {
      roles: state.roles
    };
  } else {
    return {
      roles: [{ id: '', title: '' }]
    };
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(roleAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Role);
 