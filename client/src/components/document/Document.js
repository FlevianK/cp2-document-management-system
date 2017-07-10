import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { DocumentList, DocumentHeader} from '../../containers';
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

    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
        this.props.actions.loadDocList(this.props.userId, this.state.limit, (this.state.limit * (this.state.activePage - 1)));
    }

    componentWillMount() {
        this.props.actions.loadDoc(this.props.userId);
        this.props.actions.loadDocList(this.props.userId, this.state.limit, this.state.offset);
    }

    render() {
        const documents = this.props.documentsPage;
        const totalItems = this.props.documents;
        return (
            <div>
                <DashboardHeader />
                <DocumentHeader />
                {totalItems > 0
                    ? <DocumentList documents={documents} />
                    : 'You do not have document'
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

Document.PropTypes = {
    documents: PropTypes.number.isRequired,
    documentsList: PropTypes.object.isRequired,
    userId: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
        userId: state.loginUser.userId,
        documents: state.documents.length,
        documentsPage: state.documentsPage
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(documentAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Document);