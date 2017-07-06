import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { DocumentsList, DocumentHeader, DashboardHeader } from '../../containers';
import * as documentAction from '../../actions/documentAction';
import PropTypes from 'prop-types';
import SearchDocument from './SearchDocument';
import Pagination from 'react-js-pagination';

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

    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
        this.props.actions.loadDocumentsPage(this.state.limit, (this.state.limit * (this.state.activePage - 1)));
    }

    componentWillMount() {
        this.props.actions.loadDocumentsPage(this.state.limit, this.state.offset);
        this.props.actions.loadDocuments()
    }

    render() {
        const allDocuments = this.props.allDocumentsPage;
        const totalItems = this.props.allDocuments;
        return (
            <div>
                <DashboardHeader />
                <DocumentHeader />
                {totalItems > 0
                    ? <DocumentsList documents={allDocuments} />
                    : 'No document'
                }
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
    allDocuments: PropTypes.object.isRequired,
    allDocumentsPage: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        allDocumentsPage: state.allDocumentsPage,
        allDocuments: state.allDocuments.length
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(documentAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Documents);
