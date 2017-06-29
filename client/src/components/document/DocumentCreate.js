import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { Input, DashboardHeader, SelectOptions } from '../../containers';
import * as documentAction from '../../actions/documentAction';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';
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
      errors: {},
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

  documentFormIsValid(){
    let formIsValid = true;
    let errors = {};

    if (this.state.newDocument.title.length < 1 ) {
      errors.title = 'Title must not be empty';
      formIsValid = false;
    } 
    if (this.state.newDocument.content.length < 5 ) {
      errors.content = 'Content must be at least 5 characters';
      formIsValid = false;
    } 
    if (this.state.newDocument.access.length < 5 ) {
      errors.access = 'Must select the type of document access';
      formIsValid = false;
    } 
    this.setState({errors: errors});
    return formIsValid;
  }

  onDocumentSave(event) {
    event.preventDefault();
    if(!this.documentFormIsValid()){
      return;
    }
    this.props.actions.createDocument(this.state.newDocument).then(()=> browserHistory.push('/documents'));
    
  }

  render() {
    const token = localStorage.jwt;
    const role = token && jwtDecode(token);
    const accessOption = [{value:"private", text:"Private"},{value:"public", text:"Public"}, {value: role.userRole, text:"Role"} ]
    const roleUser = role.userRole;
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
            errors={this.state.errors}
            onChange={this.onDocumentChange} />

          <Input
            name="content"
            label="Content"
            errors={this.state.errors}
            onChange={this.onDocumentChange} />

          <SelectOptions 
            options = {accessOption}
            name="access"
            label="Access Type"
            defaultOption="select access type"
            value={this.state.newDocument.access}
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

DocumentCreate.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(DocumentCreate);
