import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { UserList } from '../../containers';
import DashboardHeader from './../DashboardHeader';
import * as userAction from '../../actions/userAction';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';


export class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            users: [{
                firstName: '',
                lastName: '',
                email: '',
                title: ''
            }],
            activePage: 1,
            limit: 2,
            offset: 0
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
        this.props.actions.loadUsersPage(this.state.limit, (this.state.limit * (this.state.activePage - 1)));
    }
    componentWillMount() {
        this.props.actions.loadUsersPage(this.state.limit, this.state.offset);
        this.props.actions.loadUsers()
    }

    render() {
        const users = this.props.usersPage;
        const totalItems = this.props.users;
        return (
            <div className="col-md-12">
                <DashboardHeader />
                <UserList users={users} />
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.limit}
                    totalItemsCount={totalItems}
                    onChange={this.handlePageChange}
                />
            </div>
        )
    }
}

User.PropTypes = {
    users: PropTypes.number.isRequired,
    usersPage: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users.length,
        usersPage: state.usersPage
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(userAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
