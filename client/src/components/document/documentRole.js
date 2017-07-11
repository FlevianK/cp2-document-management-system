import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { DocumentsList, DocumentHeader } from '../../containers';
import DashboardHeader from './../DashboardHeader';
import * as documentAction from '../../actions/documentAction';
import PropTypes from 'prop-types';
import SearchDocument from './SearchDocument';
import Pagination from 'react-js-pagination';

export class DocumentRole extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activePage: 1,
      limit: 2,
      offset: 0
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentWillMount() {
    this.props.actions.loadRoleDocuments();
    this.props.actions.loadRoleDocumentsPage(this.state.limit, this.state.offset);
  }

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
    this.props.actions.loadRoleDocumentsPage(this.state.limit, (this.state.limit * (this.state.activePage - 1)));
  }

  render() {
    const roleDocuments = this.props.roleDocumentsPage;
    const totalItems = this.props.roleDocuments;
    return (
      <div>
        <DashboardHeader />
        <DocumentHeader />
        {totalItems > 0
          ? <DocumentsList documents={roleDocuments} />
          : 'No role document'
        }
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.limit}
          totalItemsCount={totalItems}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

DocumentRole.propTypes = {
  roleDocuments: PropTypes.number.isRequired,
  roleDocumentsPage: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  roleDocuments: state.roleDocuments.length,
  roleDocumentsPage: state.roleDocumentsPage,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(documentAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentRole);
