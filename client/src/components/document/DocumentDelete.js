import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { Forms } from '../../containers';
import * as documentAction from '../../actions/documentAction';
import PropTypes from 'prop-types';

class DocumentDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteDocument: {
        documentId: ''
      }
    };
    this.onDocumentChange = this.onDocumentChange.bind(this);
    this.onDocumentSave = this.onDocumentSave.bind(this);
  }

  onDocumentChange(event) {
    event.preventDefault();
    const field = event.target.name;
    const deleteDocument = this.state.deleteDocument;
    deleteDocument[field] = event.target.value;
    return this.setState({ deleteDocument: deleteDocument });
  }

  onDocumentSave(event) {
    event.preventDefault();
    this.props.actions.deleteDocument(this.state.deleteDocument);
  }

  render() {
    return (
      <div className="col-md-12">
        <form>
          <Forms
            name="documentId"
            label="Document Id"
            type="number"
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

export default connect(null, mapDispatchToProps)(DocumentDelete);
