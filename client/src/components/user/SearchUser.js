import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';
import { UserList } from '../../containers';
import * as userAction from '../../actions/userAction';
import DashboardHeader from '../common/DashboardHeader';

export class SearchUser extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      searchValue: '',
      activePage: 1,
      limit: 2,
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

  onUserClick(event) {
    event.preventDefault();
    this.props.actions.searchUsersPage(this.state.searchValue, this.state.limit, this.state.offset);
    this.props.actions.searchUser(this.state.searchValue);
  }

  render() {
    const usersSearch = this.props.usersSearchPage;
    const totalItems = this.props.usersSearch;
    return (
      <div className="col-md-12">
        <DashboardHeader />
        <div className="row">
          <div className="col s6 offset-m3">
            <input
              name="user"
              label="Search"
              type="search"
              onChange={this.onUserChange}
            />
          </div>
          <div>
            <i className="material-icons" onClick={this.onUserClick} >search</i>
          </div>
        </div>
        <UserList users={usersSearch} />
        
        {totalItems > this.state.limit
          ? <Pagination
            style={{backgroundColor: "green", color: "white"}}
            activePage={this.state.activePage}
            itemsCountPerPage={this.state.limit}
            totalItemsCount={totalItems}
            onChange={this.handlePageChange}
          />
          : ''
        }
      </div >
    );
  }
}
SearchUser.propTypes = {
  usersSearch: PropTypes.number,
  usersSearchPage: PropTypes.array,
  actions: PropTypes.object
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(userAction, dispatch)
});

const mapStateToProps = (state, ownProps) => ({
  usersSearch: state.usersSearch.length,
  usersSearchPage: state.usersSearchPage
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);
