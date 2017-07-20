import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';
import { RoleList } from '../../containers';
import DashboardHeader from '../common/DashboardHeader';
import * as roleAction from '../../actions/roleAction';

export class SearchRole extends React.Component {
  /**
    * SearchRole class
    * It is for searching roles
  */
  constructor(props, context) {
    super(props, context);
    this.state = {
      searchValue: '',
      activePage: 1,
      limit: 2,
      offset: 0
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.onRoleChange = this.onRoleChange.bind(this);
    this.onRoleClick = this.onRoleClick.bind(this);
  }

  onRoleChange(event) {
    return this.setState({ searchValue: event.target.value });
  }

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
    this.props.actions.searchRolesPage(this.state.searchValue, this.state.limit, (this.state.limit * (this.state.activePage - 1)));
  }

  onRoleClick(event) {
    event.preventDefault();
    this.props.actions.searchRolesPage(this.state.searchValue, this.state.limit, this.state.offset);
    this.props.actions.searchRoles(this.state.searchValue);
  }

  render() {
    const rolesSearch = this.props.rolesSearchPage;
    const totalItems = this.props.rolesSearch;
    return (
      <div className="col-md-12">
        <DashboardHeader />
        <div className="row">
          <div className="col s6 offset-m3">
            <input
              name="role"
              label="Search"
              type="search"
              onChange={this.onRoleChange}
            />
          </div>
          <div >
            <i className="material-icons" onClick={this.onRoleClick} >search</i>
          </div>
        </div>

        {totalItems > 0
          ? <RoleList roles={rolesSearch} />
          : ''
        }
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

SearchRole.propTypes = {
  rolesSearchPage: PropTypes.array,
  rolesSearch: PropTypes.number,
  actions: PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({
  rolesSearch: state.rolesSearch.length,
  rolesSearchPage: state.rolesSearchPage
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(roleAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchRole);
