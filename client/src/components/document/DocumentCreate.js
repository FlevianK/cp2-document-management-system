import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { Form, DashboardHeader } from '../../containers';
import * as documentAction from '../../actions/documentAction';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';

export class DocumentCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newDocument: {
        title: '',
        content: '',
        access: ''
      }
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

  onDocumentSave(event) {
    event.preventDefault();
    this.props.actions.createDocument(this.state.newDocument);
  }

  render() {
    const token = localStorage.jwt;
    const role = token && jwtDecode(token);
    return (
      <div>
        {role && role.userRole === "admin"
          ? <DashboardHeader />
          : ''
        }
        <form>
          <Form
            name="title"
            label="title"
            type="text"
            onChange={this.onDocumentChange} />

          <Form
            name="content"
            label="Content"
            type="text"
            onChange={this.onDocumentChange} />
          <Form
            name="access"
            label="access"
            type="text"
            onChange={this.onDocumentChange} />

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
