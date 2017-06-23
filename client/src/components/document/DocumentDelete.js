import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { Forms, DashboardHeader } from '../../containers';
import * as documentAction from '../../actions/documentAction';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';

export class DocumentDelete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteDocument: {
                documentId: this.props.params.documentId
            }
        };
        this.onDocumentSave = this.onDocumentSave.bind(this);
    }
    onDocumentSave(event) {
        event.preventDefault();
        this.props.actions.deleteDocument(this.state.deleteDocument);
    }

    render() {
        const token = localStorage.jwt;
        const role = token && jwtDecode(token);
        return (
            <div className="col-md-12">
                {role && role.userRole === "admin"
                    ? <DashboardHeader />
                    : ''
                }
                <form>
                    <Forms
                        value={this.props.params.documentId} />

                    <input
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.onDocumentSave} />
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(documentAction, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(DocumentDelete);

