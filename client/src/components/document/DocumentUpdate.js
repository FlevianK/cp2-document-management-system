import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { Input, Forms, SelectOptions, DashboardHeader } from '../../containers';
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
    this.props.actions.updateDocument(this.state.documents).then(()=> browserHistory.push('/documents'));
    
  }

  render() {
    const token = localStorage.jwt;
    const role = token && jwtDecode(token);
    const accessOption = [{value:"private", text:"Private"},{value:"public", text:"Public"}, {value: role.userRole, text:"Role"} ]
    return (
      <div>
        <DashboardHeader />
        <form>
          <Input
            name="title"
            label="title"
            type="text"
            placeholder={this.props.documents.title}
            errors={this.state.errors}
            onChange={this.onDocumentChange} />

          <Input
            name="content"
            label="Content"
            type="text"
            placeholder={this.props.documents.content}
            errors={this.state.errors}
            onChange={this.onDocumentChange} />

          <SelectOptions 
            options = {accessOption}
            name="access"
            label="Access Type"
            defaultOption="select access type"
            value={this.state.documents.access}
            errors={this.state.errors}
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
