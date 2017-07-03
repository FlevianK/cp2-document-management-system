import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginAction from '../actions/loginAction';
import { browserHistory } from 'react-router';
import jwtDecode from 'jwt-decode';

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
        const documents = this.props.documents;
        const token = localStorage.jwt;
        const role = token && jwtDecode(token);
        return (
            <nav>
                {role && role.userRole === "admin"
                    ? <Link to="/roles" activeClassName="active">Roles</Link>
                    : ''
                }
                {" | "}
                {role && role.userRole === "admin"
                    ? <Link to="/users" activeClassName="active">Users</Link>
                    : ''
                }
                {" | "}
                <Link to="/documents" activeClassName="active">Documents</Link>
                {" | "}
                <Link to="#" activeClassName="active" onClick={this.onLogoutClick}>Logout</Link>
                {"|"}
                <Link to="/users/search" activeClassName="active">search</Link>
            </nav>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginAction, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(DashboardHeader);

