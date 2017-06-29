import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { DocumentsList, DocumentHeader, DashboardHeader } from '../../containers';
import * as documentAction from '../../actions/documentAction';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';
import SearchDocument from './SearchDocument';
import Pagination from 'react-js-pagination';

export class Documents extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      documents: [{
        title: '',
        content: '',
        access: ''
      }],
      activePage: 1,
      limit: 4,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
    this.props.actions.loadDocumentsPage(this.state.limit, (this.state.limit * (this.state.activePage - 1)));
  }

  componentWillMount() {
    this.props.actions.loadDocumentsPage();
    this.props.actions.loadDocuments()
  }

  render() {
    const documents = this.props.documentsPage;
    const totalItems = this.props.documents.length;
    const token = localStorage.jwt;
    const role = token && jwtDecode(token);
    return (
      <div>
        {role && role.userRole === "admin"
          ? <DashboardHeader />
          : ''
        }
        <DocumentHeader />
        <SearchDocument />
        <DocumentsList documents={documents} />
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

Documents.PropTypes = {
  documents: PropTypes.object.isRequired,
  documentsPage: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  if (state.documents.length > 0) {
    return {
      documentsPage: state.documentsPage,
      documents: state.documents
    };
  } else {
    return {
      documents: [{ id: '', title: '', content: '', access: '' }]
    };
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(documentAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Documents);
