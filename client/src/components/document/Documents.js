import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { DocumentList, DocumentHeader, DashboardHeader } from '../../containers';
import * as documentAction from '../../actions/documentAction';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';

export class Document extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      documents: [{
        title: '',
        content: '',
        access: ''
      }]
    };
  }
  componentWillMount() {
    let documents;
    this.props.actions.loadDocuments()
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
        <h2>Documents</h2>
        <DocumentHeader />
        <DocumentList documents={this.props.documents} />
      </div>
    )
  }
}

Document.PropTypes = {
  documents: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  if (state.documents.length > 0) {
    return {
      documents: state.documents
    };
  } else {
    return {
      documents: [{ id: '', title: '', content: '', access: '' }]
    };
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(documentAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Document);
