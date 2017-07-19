import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';
import { DocumentsList, DocumentHeader } from '../../containers';
import DashboardHeader from './../DashboardHeader';
import * as documentAction from '../../actions/documentAction';

export class SearchDocument extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      documentsSearchPage: {},
      documentsSearch: {},
      searchValue: '',
      activePage: 1,
      limit: 2,
      offset: 0
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.onDocumentChange = this.onDocumentChange.bind(this);
    this.onDocumentClick = this.onDocumentClick.bind(this);
  }

  onDocumentChange(event) {
    return this.setState({ searchValue: event.target.value });
  }

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
    this.props.actions.searchDocumentsPage(this.state.searchValue, this.state.limit, (this.state.limit * (this.state.activePage - 1)));
  }

  onDocumentClick(event) {
    event.preventDefault();
    this.props.actions.searchDocumentsPage(this.state.searchValue, this.state.limit, this.state.offset);
    this.props.actions.searchDocuments(this.state.searchValue);
  }

  render() {
    const documentsSearch = this.props.documentsSearchPage;
    const totalItems = this.props.documentsSearch;
    return (
      <div className="col-md-12">
        <DashboardHeader />
        <div className="row">
          <div className="col s6 offset-m3">
            <input
              name="document"
              label="Search"
              type="search"
              onChange={this.onDocumentChange}
            />
          </div>
          <div >
            <i className="material-icons" onClick={this.onDocumentClick} >search</i>
          </div>
        </div> 
        <DocumentsList documents={documentsSearch} />
        
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
SearchDocument.propTypes = {
  documentsSearchPage: PropTypes.array,
  documentsSearch: PropTypes.number,
  actions: PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({
  documentsSearch: state.documentsSearch.length,
  documentsSearchPage: state.documentsSearchPage
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(documentAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchDocument);
