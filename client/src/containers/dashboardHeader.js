import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginAction from '../actions/loginAction';
import { browserHistory } from 'react-router';

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
            <nav>
                {this.props.userRole && this.props.userRole === "admin"
                    ? <Link to="/roles" activeClassName="active">Roles</Link>
                    : ''
                }
                {this.props.userRole && this.props.userRole === "admin"
                    ? " | "
                    : ''
                }
                {this.props.userRole && this.props.userRole === "admin"
                    ? <Link to="/users" activeClassName="active">Users</Link>
                    : ''
                }
                {this.props.userRole && this.props.userRole === "admin"
                    ? " | "
                    : ''
                }
                <Link to="/documents" activeClassName="active">Documents</Link>
                {"|"}
                <Link to="/users/search" activeClassName="active">User search</Link>
                {"|"}
                <Link to="/documents/search" activeClassName="active">Document search</Link>
                {" | "}
                <Link to="#" activeClassName="active" onClick={this.onLogoutClick}>Logout</Link>
            </nav>
        );
    }
}

DashboardHeader.PropTypes = {
    userRole: PropTypes.string.isRequired
}

function mapStateToProps(state, ownProps) {
    console.log(state.loginUser.userRole)
    return {
        userRole: state.loginUser.userRole,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader);

