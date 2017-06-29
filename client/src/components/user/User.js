import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { UserList, DashboardHeader } from '../../containers';
import * as userAction from '../../actions/userAction';
import PropTypes from 'prop-types';
import SearchUser from './SearchUser';
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
            limit: 4,
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
        this.props.actions.loadUsersPage(this.state.limit, (this.state.limit * (this.state.activePage - 1)));
    }
    componentWillMount() {
        console.log('Component will mount', this.props.actions);
        this.props.actions.loadUsersPage();
        this.props.actions.loadUsers()
    }

    render() {
        const users = this.props.users;
        const totalItems = this.props.usersPage.length;
        return (
            <div className="col-md-12">
                <DashboardHeader />
                <SearchUser />
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
    usersPage: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    console.log(state, "jhkjgf");
    return {
        users: state.users,
        usersPage: state.usersPage
    };
    // if (state.users.length > 0) {
    //     return {
    //         users: state.users,
    //         usersPage: state.usersPage
    //     };
    // } else {
    //     return {
    //         users: [{ id: '', firstName: '', lastName: '', email: '', title: '' }]
    //     };
    // }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
