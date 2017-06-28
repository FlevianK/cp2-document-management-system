import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { Form, DashboardHeader } from '../../containers';
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

  // documentFormIsValid(){
  //   let formIsValid = true;
  //   let errors = {};

  //   if (this.state.newDocument.title.length < 1 ) {
  //     errors.title = 'Title must not be empty';
  //     formIsValid = false;
  //   } 
  //   if (this.state.newDocument.content.length < 5 ) {
  //     errors.content = 'Content must be at least 5 characters';
  //     formIsValid = false;
  //   } 
  //   if (this.state.newDocument.access.length < 5 ) {
  //     errors.access = 'Must select the type of document access';
  //     formIsValid = false;
  //   } 
  //   this.setState({errors: errors});
  //   return formIsValid;
  // }

  onDocumentSave(event) {
    event.preventDefault();
    // if(!this.documentFormIsValid()){
    //   return;
    // }
    this.props.actions.createDocument(this.state.newDocument);
      // browserHistory.push('/documents')
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
            label="Access"
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
