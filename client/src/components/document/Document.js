import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { DocumentList, DocumentHeader } from '../../containers';
import * as documentAction from '../../actions/documentAction';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';
import SearchDocument from './SearchDocument';
import DashboardHeader from './../DashboardHeader';
import Pagination from 'react-js-pagination';


export class Document extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      deleteDocument: {
        documentId: ''
      },
      documents: [{
        title: '',
        content: '',
        access: ''
      }],
      activePage: 1,
      limit: 2,
      offset: 0
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentWillMount() {
    this.props.actions.loadDoc();
    this.props.actions.loadDocList(this.state.limit, this.state.offset);
  }

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
    this.props.actions.loadDocList(this.state.limit, (this.state.limit * (this.state.activePage - 1)));
  }

  render() {
    const documents = this.props.documentsPage;
    const totalItems = this.props.documents;
    return (
      <div>
        <DashboardHeader />
        <DocumentHeader />
        {totalItems > 0
          ? <DocumentList documents={documents}/>
          :<h6 style={{margin: " 1% 15% 3% 15%", padding: " 0 4% 4% 4% "}} >Post a document</h6>
        }
        {totalItems > this.state.limit
          ? <Pagination
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

Document.propTypes = {
  documents: PropTypes.number,
  documentsPage: PropTypes.array,
  actions: PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({
  documents: state.documents.length,
  documentsPage: state.documentsPage
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(documentAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Document);
