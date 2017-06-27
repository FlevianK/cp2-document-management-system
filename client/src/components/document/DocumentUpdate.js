import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { Form, Forms, DashboardHeader } from '../../containers';
import * as documentAction from '../../actions/documentAction';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';
import { browserHistory } from 'react-router';

export class DocumentUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      documents: {
        documentId: this.props.params.documentId
      }
    };
    this.onDocumentChange = this.onDocumentChange.bind(this);
    this.onDocumentSave = this.onDocumentSave.bind(this);
  }

  componentWillMount() {
    this.props.actions.loadDocument(this.props.params)
  }

  onDocumentChange(event) {
    event.preventDefault();
    const field = event.target.name;
    const documents = this.state.documents;
    documents[field] = event.target.value;
    return this.setState({ documents: documents });
  }

  onDocumentSave(event) {
    event.preventDefault();
    this.props.actions.updateDocument(this.state.documents);
    browserHistory.push('/documents')
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
            placeholder={this.props.documents.title}
            onChange={this.onDocumentChange} />

          <Form
            name="content"
            label="Content"
            type="text"
            placeholder={this.props.documents.content}
            onChange={this.onDocumentChange} />

          <Form
            name="access"
            label="access"
            type="text"
            placeholder={this.props.documents.access}
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

DocumentUpdate.propTypes = {
  documents: PropTypes.object.isRequired,
  access: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    documents: state.documents
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(documentAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentUpdate);
