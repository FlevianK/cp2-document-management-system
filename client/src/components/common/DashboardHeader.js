import React from 'react';
import { Link, browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginAction from '../../actions/loginAction';

export class DashboardHeader extends React.Component {
  constructor(props) {
    super(props);
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  onLogoutClick(event) {
    event.preventDefault();
    this.props.actions.logoutUser();
    browserHistory.push('/');
    window.location.reload();
  }

  render() {
    const userRole = localStorage.getItem('userRole');
    return (
      <div>
        <nav style={{backgroundColor: "green", color: "white"}}>
          <span style={{ float: 'left', paddingLeft : "15%" }}>
            {userRole && userRole === 'admin'
              ? <Link to="/roles" activeClassName="active">Roles</Link>
              : ''
            }
            {userRole && userRole === 'admin'
              ? ' | '
              : ''
            }
            {userRole && userRole === 'admin'
              ? <Link to="/users" activeClassName="active">Users</Link>
              : ''
            }
            {userRole && userRole === 'admin'
              ? ' | '
              : ''
            }
            <Link to="/documents" activeClassName="active">My Documents</Link>
            {' | '}
            <Link to="/users/profile" activeClassName="active">Edit profile</Link>
          </span>
          <span style={{ float: 'right', paddingRight : "15%" }}>
            <Link to="#" activeClassName="active" onClick={this.onLogoutClick}>Logout</Link>
          </span>
        </nav>
      </div>
    );
  }
}

DashboardHeader.propTypes = {
  actions: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(loginAction, dispatch)
});

export default connect(null, mapDispatchToProps)(DashboardHeader);

