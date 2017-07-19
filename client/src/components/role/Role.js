import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';
import { RoleList, RoleHeader } from '../../containers';
import DashboardHeader from '../common/DashboardHeader';
import * as roleAction from '../../actions/roleAction';

export class Role extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      roles: {},
      activePage: 1,
      limit: 2,
      offset: 0
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentWillMount() {
    this.props.actions.loadRoles();
    this.props.actions.loadRolesPage(this.state.limit, this.state.offset);
  }

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
    this.props.actions.loadRolesPage(this.state.limit, (this.state.limit * (this.state.activePage - 1)));
  }

  render() {
    const roles = this.props.rolesPage;
    const totalItems = this.props.roles;
    return (
      <div className="col-md-12">
        <DashboardHeader />
        <RoleHeader />
        <RoleList roles={roles} />
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
      </div>
    );
  }
}
Role.propTypes = {
  roles: PropTypes.number.isRequired,
  rolesPage: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  roles: state.roles.length,
  rolesPage: state.rolesPage
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(roleAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Role);
