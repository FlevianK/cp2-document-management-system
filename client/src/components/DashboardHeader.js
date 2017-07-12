import React from 'react';
import { Link, browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginAction from '../actions/loginAction';

export class DashboardHeader extends React.Component {
  constructor(props) {
    super(props);
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  onLogoutClick(event) {
    event.preventDefault();
    this.props.actions.logoutUser();
    browserHistory.push('/');
  }

  render() {
    return (
      <div>
        <nav style={{backgroundColor: "green", color: "white"}}>
          {this.props.userRole && this.props.userRole === 'admin'
            ? <Link to="/roles" activeClassName="active">Roles</Link>
            : ''
          }
          {this.props.userRole && this.props.userRole === 'admin'
            ? ' | '
            : ''
          }
          {this.props.userRole && this.props.userRole === 'admin'
            ? <Link to="/users" activeClassName="active">Users</Link>
            : ''
          }
          {this.props.userRole && this.props.userRole === 'admin'
            ? ' | '
            : ''
          }
          <Link to="/documents" activeClassName="active">My Documents</Link>
          {'|'}
          <Link to="/roles/search" activeClassName="active">Role search</Link>
          {'|'}
          <Link to="/users/search" activeClassName="active">User search</Link>
          {'|'}
          <Link to="/documents/search" activeClassName="active">Document search</Link>
          {' | '}
          <Link to="/users/profile" activeClassName="active">Edit profile</Link>
          {' | '}
          <Link to="#" activeClassName="active" onClick={this.onLogoutClick}>Logout</Link>
        </nav>
      </div>
    );
  }
}

DashboardHeader.propTypes = {
  userRole: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  userRole: state.loginUser.userRole,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(loginAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader);

