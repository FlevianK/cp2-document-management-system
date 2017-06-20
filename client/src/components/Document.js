import React from 'react'; 
import {connect} from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import DocumentList from '../containers/documentList';
import DocumentHeader from '../containers/documentHeader';
import * as documentAction from '../actions/documentAction';
import PropTypes from 'prop-types';
 
 class Document extends React.Component {
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

  render () {
    return (
      <div className="col-md-12">
        <h1>Documents</h1>
        <DocumentHeader />
        <DocumentList documents={this.props.documents} />
       
      </div>
    )
  }
 }

 Document.PropTypes = {
    documents: PropTypes.object.isRequired
 }

 function mapStateToProps(state, ownProps){
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
 
