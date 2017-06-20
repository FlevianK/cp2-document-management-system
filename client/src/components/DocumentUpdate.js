import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import Form from '../containers/form';
import Forms from '../containers/forms';
import * as documentAction from '../actions/documentAction';
import PropTypes from 'prop-types';

class DocumentUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateDocument: {
        documentId: '',
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
    const updateDocument = this.state.updateDocument;
    updateDocument[field] = event.target.value;
    return this.setState({ updateDocument: updateDocument });
  }

  onDocumentSave(event) {
    event.preventDefault();
    this.props.actions.updateDocument(this.state.updateDocument);
  }


  render() {
    return (
      <div className="col-md-12">
        <form>
          <Forms
            name="documentId"
            label="document id"
            type="number"
            value={this.state.updateDocument.documentId}
            onChange={this.onDocumentChange} />

            <Form
            name="title"
            label="title"
            type="text"
            value={this.state.updateDocument.title}
            onChange={this.onDocumentChange} />

          <Form
            name="content"
            label="Content"
            type="text"
            value={this.state.updateDocument.content}
            onChange={this.onDocumentChange} />
          <Form
            name="access"
            label="access"
            type="text"
            value={this.state.updateDocument.access}
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

export default connect(null, mapDispatchToProps)(DocumentUpdate);

