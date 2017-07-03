import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { DocumentList, DocumentHeader, DashboardHeader } from '../../containers';
import * as documentAction from '../../actions/documentAction';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';
import SearchDocument from './SearchDocument';
import Pagination from 'react-js-pagination';

const token = localStorage.jwt;
const user = token && jwtDecode(token);
const idUser = user.userId;

export class Document extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          idUser: idUser,
            documents: [{
                title: '',
                content: '',
                access: ''
            }],
            activePage: 1,
            limit: 2,
            offset:0
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
        this.props.actions.loadDocList(this.state.idUser, this.state.limit, (this.state.limit * (this.state.activePage - 1)));
    }

    componentWillMount() {
        this.props.actions.loadDoc(this.state.idUser);
        this.props.actions.loadDocList(this.state.idUser, this.state.limit, this.state.offset);
    }

    render() {
        const documents = this.props.documentsPage;
        const totalItems = this.props.documents;
        return (
            <div>
                <DashboardHeader />
                <DocumentHeader />
                <SearchDocument />
                <DocumentList documents={documents} />
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

Document.PropTypes = {
    documents: PropTypes.object.isRequired,
    documentsList: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        documents: state.documents.length,
        documentsPage: state.documentsPage
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(documentAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Document);
