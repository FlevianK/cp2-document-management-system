import React from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { DocumentList, DocumentHeader, DashboardHeader } from '../../containers';
import * as documentAction from '../../actions/documentAction';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';
import SearchDocument from './SearchDocument';
 
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
    const token = localStorage.jwt;
    const user = token && jwtDecode(token);
    const idUser = user.userId;
    this.props.actions.loadDoc(idUser);
  }

  render () {
    const token = localStorage.jwt;
    const role = token && jwtDecode(token);
    return (
      <div>
        {role && role.userRole === "admin"
          ? <DashboardHeader />
            : ''
          }
        <DocumentHeader />
        <SearchDocument />
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
 