import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { Form, DashboardHeader } from '../../containers';
import * as userAction from '../../actions/userAction';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

export class UserDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deletedUser: {
        userId: this.props.params.userId
      }
    };
    this.onUserSave = this.onUserSave.bind(this);
  }
  onUserSave(event) {
    event.preventDefault();
    this.props.actions.deleteUser(this.state.deletedUser);
    this.props.actions.loadUsers();
    // browserHistory.push('/users');
  }

  render() {
    return (
      <div className="col-md-12">
        <DashboardHeader />
        <form>
          <Form
            value={this.props.params.userId}
            label="User Id"/>

          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.onUserSave} />
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userAction, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(UserDelete);
