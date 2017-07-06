import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { Input, DashboardHeader } from '../../containers';
import * as documentAction from '../../actions/documentAction';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

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

    componentWillMount() {
        this.props.actions.loadDocument(this.props.params)
    }

    onDocumentSave(event) {
        event.preventDefault();
        this.props.actions.deleteDocument(this.state.deleteDocument).then(() => browserHistory.push('/documents'));
    }

    render() {
        return (
            <div className="col-md-12">
                <DashboardHeader />
                <form>
                    <Input
                        label="Title"
                        value={this.props.documents.title} />

                    <input
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.onDocumentSave} />
                </form>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        documents: state.documents,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(documentAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentDelete);

