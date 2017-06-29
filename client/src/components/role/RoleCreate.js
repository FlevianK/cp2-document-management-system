import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { Input , DashboardHeader} from '../../containers';
import * as roleAction from '../../actions/roleAction';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

export class RoleCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newRole: {
        title: ''
      },
      errors: {}
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

  roleFormIsValid(){
    let formIsValid = true;
    let errors = {};

    if (this.state.newRole.title.length < 1 ) {
      errors.title = 'Role must not be empty';
      formIsValid = false;
    } 
    this.setState({errors: errors});
    return formIsValid;
  }

  onRoleSave(event) {
    event.preventDefault();
    if(!this.roleFormIsValid()){
      return;
    }
    this.props.actions.createRole(this.state.newRole);
    this.props.actions.loadRoles().then(()=> browserHistory.push('/roles'));
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
