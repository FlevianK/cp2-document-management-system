import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { Forms } from '../../containers';
import * as userAction from '../../actions/userAction';
import PropTypes from 'prop-types';

class UserDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deletedUser: {
        userId: ''
      }
    };
    this.onUserChange = this.onUserChange.bind(this);
    this.onUserSave = this.onUserSave.bind(this);
  }

  onUserChange(event) {
    event.preventDefault();
    const field = event.target.name;
    const deletedUser = this.state.deletedUser;
    deletedUser[field] = event.target.value;
    return this.setState({ deletedUser: deletedUser });
  }

  onUserSave(event) {
    event.preventDefault();
    this.props.actions.deleteUser(this.state.deletedUser);
  }

  render() {
    return (
      <div className="col-md-12">
        <form>
          <Forms
            name="userId"
            label="User Id"
            type="number"
            onChange={this.onUserChange} />

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
