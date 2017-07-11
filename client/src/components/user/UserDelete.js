import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { Input } from '../../containers';
import DashboardHeader from './../DashboardHeader';
import * as userAction from '../../actions/userAction';
import PropTypes from 'prop-types';

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

  componentWillMount() {
    this.props.actions.loadUser(this.props.params);
  }
  onUserSave(event) {
    event.preventDefault();
    this.props.actions.deleteUser(this.state.deletedUser);
    this.props.actions.loadUsersPage().then(() => browserHistory.push('/users'));
  }

  render() {
    return (
      <div className="col-md-12">
        <DashboardHeader />
        <form>
          <Input
            value={this.props.users.firstName}
            label="Name"
          />

          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.onUserSave}
          />
        </form>
      </div>
    );
  }
}

UserDelete.propTypes = {
  users: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(userAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDelete);
