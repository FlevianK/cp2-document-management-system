import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { UserList, DashboardHeader, Form, UserHeader } from '../../containers';
import * as userAction from '../../actions/userAction';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';

export class SearchUser extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            searchValue: '',
            activePage: 1,
            limit: 4,
            offset: 0
        };
        this.handlePageChange = this.handlePageChange.bind(this);
        this.onUserChange = this.onUserChange.bind(this);
        this.onUserClick = this.onUserClick.bind(this);
    }

    onUserChange(event) {
        event.preventDefault();
        return this.setState({ searchValue: event.target.value });
    }

    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
        this.props.actions.searchUsersPage(this.state.searchValue, this.state.limit, (this.state.limit * (this.state.activePage - 1)));
    }

    onUserClick() {
        event.preventDefault();
        this.props.actions.searchUsersPage(this.state.searchValue, this.state.limit, this.state.offset);
        this.props.actions.searchUsers(this.state.searchValue);
    }

    render() {
        const usersSearch = this.props.usersSearchPage;
        const totalItems = this.props.usersSearch;
        return (
            <div className="col-md-12">
                <DashboardHeader />
                <div className="col s4 offset-m4">

                    <input
                        name="user"
                        label="Search"
                        type="text"
                        onChange={this.onUserChange} />
                </div>
                <div className="col s4 ">
                    <i className="material-icons" onClick={this.onUserClick} >search</i>
                </div>
                <UserList users={usersSearch} />
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.limit}
                    totalItemsCount={totalItems}
                    onChange={this.handlePageChange}
                />
            </div >
        )
    }
}

SearchUser.PropTypes = {
    usersSearch: PropTypes.object.isRequired,
    usersSearchPage: PropTypes.object.isRequired
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userAction, dispatch)
    };
}
function mapStateToProps(state, ownProps) {
    return {
        usersSearch: state.usersSearch.length,
        usersSearchPage: state.usersSearchPage
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);
