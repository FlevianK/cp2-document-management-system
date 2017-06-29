import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { Input, DashboardHeader } from '../../containers';
import * as documentAction from '../../actions/documentAction';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';
import Select from 'react-select';
import { browserHistory } from 'react-router';

export class DocumentCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newDocument: {
                title: '',
                content: '',
                access: ''
            },
            errors: {}
        };
        this.onDocumentChange = this.onDocumentChange.bind(this);
        this.onDocumentSave = this.onDocumentSave.bind(this);
    }

    onDocumentChange(event) {
        event.preventDefault();
        const field = event.target.name;
        const newDocument = this.state.newDocument;
        newDocument[field] = event.target.value;
        return this.setState({ newDocument: newDocument });
    }

    documentFormIsValid() {
        let formIsValid = true;
        let errors = {};

        if (this.state.newDocument.title.length < 1) {
            errors.title = 'Title must not be empty';
            formIsValid = false;
        }
        if (this.state.newDocument.content.length < 5) {
            errors.content = 'Content must be at least 5 characters';
            formIsValid = false;
        }
        if (this.state.newDocument.access.length < 1) {
            errors.access = 'Must select the type of document access';
            formIsValid = false;
        }
        this.setState({ errors: errors });
        return formIsValid;
    }

    onDocumentSave(event) {
        event.preventDefault();
        if (!this.documentFormIsValid()) {
            return;
        }
        this.props.actions.createDocument(this.state.newDocument).then(() => browserHistory.push('/documents'));

    }

    render() {
        const token = localStorage.jwt;
        const role = token && jwtDecode(token);
        const options = [{ value: "public", text: "Public" }, { value: "private", text: "Private" }, { value: role.userRole, text: "Role" }];
        return (
            <div>
                {role && role.userRole === "admin"
                    ? <DashboardHeader />
                    : ''
                }
                <form>
                    <Input
                        name="title"
                        label="title"
                        type="text"
                        onChange={this.onDocumentChange} />

                    <Input
                        name="content"
                        label="Content"
                        type="text"
                        onChange={this.onDocumentChange} />

                    <div>
                        <label>Access</label>
                        <div>
                            <select name="access" className="browser-default" onChange={this.onDocumentChange}>
                                <option value="public">Public</option>
                                <option value="private">Private</option>
                                <option value={role.userRole}>Role</option>
                            </select>
                        </div>
                    </div>

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

export default connect(null, mapDispatchToProps)(DocumentCreate);
