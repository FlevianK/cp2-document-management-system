import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';
import { DocumentsList, DocumentHeader } from '../../containers';
import DashboardHeader from '../common/DashboardHeader';
import * as documentAction from '../../actions/documentAction';
import SearchDocument from './SearchDocument';

export class DocumentRole extends React.Component {
  /**
    * DocumentRole class
    * It is for displaying role-based documents
    */
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
          ?<DocumentsList documents={roleDocuments} />
          :<h6 style={{margin: " 1% 15% 3% 15%", padding: " 0 4% 4% 4% "}} >No role document found</h6>
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
      </div>
    );
  }
}
DocumentRole.propTypes = {
  roleDocuments: PropTypes.number,
  roleDocumentsPage: PropTypes.array,
  actions: PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({
  roleDocuments: state.roleDocuments.length,
  roleDocumentsPage: state.roleDocumentsPage,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(documentAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentRole);
