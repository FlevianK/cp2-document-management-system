import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { RoleList, RoleHeader, DashboardHeader } from '../../containers';
import * as roleAction from '../../actions/roleAction';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';

export class Role extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      roles: {
        title: '',
        activePage: 1
      },
        limit: 2,
        offset: 0
    }
      this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(pageNumber) {
      this.setState({ activePage: pageNumber });
      this.props.actions.loadRolesPage(this.state.limit, (this.state.limit * (this.state.activePage - 1)));
    }
    componentDidMount() {
      this.props.actions.loadRoles();
      this.props.actions.loadRolesPage(this.state.limit, this.state.offset)
    }

    render() {
        const roles = this.props.rolesPage;
        const totalItems = this.props.roles;
      return (
        <div className="col-md-12">
          <DashboardHeader />
          <RoleHeader />
          <RoleList roles={roles} />
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

  Role.PropTypes = {
    roles: PropTypes.object.isRequired,
    rolesPage: PropTypes.object.isRequired
  }

function mapStateToProps(state, ownProps) {
  return {
    roles: state.roles.length,
    rolesPage: state.rolesPage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(roleAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Role);
