/* eslint no-use-before-define: 0 */  // --> OFF
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';
import DashboardHeader from './../DashboardHeader';
import SearchDocument from './SearchDocument';
import { DocumentsList, DocumentHeader } from '../../containers';
import * as documentAction from '../../actions/documentAction';

export class Documents extends React.Component {
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
    this.props.actions.loadDocumentsPage(this.state.limit, this.state.offset);
    this.props.actions.loadDocuments();
  }

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
    this.props.actions.loadDocumentsPage(this.state.limit, (this.state.limit * (this.state.activePage - 1)));
  }
  render() {
    const allDocuments = this.props.allDocumentsPage;
    const totalItems = this.props.allDocuments;
    return (
      <div>
        <DashboardHeader />
        <DocumentHeader />
        <DocumentsList documents={allDocuments} />
        
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

Documents.propTypes = {
  allDocuments: PropTypes.number.isRequired,
  allDocumentsPage: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  allDocumentsPage: state.allDocumentsPage,
  allDocuments: state.allDocuments.length
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(documentAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Documents);
