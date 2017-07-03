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

export class DocumentRole extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            activePage: 1,
            limit: 2,
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
        this.props.actions.loadRoleDocumentsPage(this.state.limit, (this.state.limit * (this.state.activePage - 1)));
    }

    componentWillMount() {
        this.props.actions.loadRoleDocuments();
        this.props.actions.loadRoleDocumentsPage();
    }

    render() {
        const roleDocuments = this.props.roleDocumentsPage;
        const totalItems = this.props.roleDocuments;
        return (
            <div>
                <DashboardHeader />
                <DocumentHeader />
                <SearchDocument />
                <DocumentsList documents={roleDocuments} />
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

DocumentRole.PropTypes = {
    roleDocuments: PropTypes.object.isRequired,
    roleDocumentsPage: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        roleDocuments: state.roleDocuments.length,
        roleDocumentsPage: state.roleDocumentsPage,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(documentAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentRole);
