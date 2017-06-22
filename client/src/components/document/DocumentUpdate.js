import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { Form, Forms } from '../../containers';
import * as documentAction from '../../actions/documentAction';
import PropTypes from 'prop-types';

class DocumentUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      document: Object.assign({}, props.document)
    };
    this.onDocumentChange = this.onDocumentChange.bind(this);
    this.onDocumentSave = this.onDocumentSave.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.document.id != nextProps.document.id) {
      this.setState({document: Object.assign({}, nextProps.document)});
    }
  }

  onDocumentChange(event) {
    event.preventDefault();
    const field = event.target.name;
    const document = this.state.document;
    document[field] = event.target.value;
    return this.setState({ document: document });
  }

  onDocumentSave(event) {
    event.preventDefault();
    this.props.actions.updateDocument(this.state.document);
    this.context.router.push('/documents')
  }

  render() {
    return (
      <div className="col-md-12">
        <form>
          <Forms
            name="documentId"
            label="document id"
            type="number"
            onChange={this.onDocumentChange} />

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

DocumentUpdate.propTypes = {
  document: PropTypes.object.isRequired,
  access: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

DocumentUpdate.contextTypes = {
  router: PropTypes.object
};

function getDocumentById(documents, id) {
  const document = documents.filter( document => document.id == id)
  if(document) return document[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const documentId = ownProps.params.id;

  let document = {id: '', title: '', content: '', access: ''}

  if(documentId && state.documents.length > 0) {
    document = getDocumentById(state.documents, documentId)
  }

  const accessFormattedFordDropdown = [
    {value: "private", text: "Private"},
    {value: "public", text:"Public"}
    ];

  return {
    document: document,
    access: accessFormattedFordDropdown
}; 
// const roleformattedForDropdown =state.roles.map(role => {
//   return {
//     value: role.title,
//     text: role.title
//   };
// });

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(documentAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentUpdate);
