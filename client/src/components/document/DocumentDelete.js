import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Input } from '../../containers';
import DashboardHeader from '../common/DashboardHeader';
import * as documentAction from '../../actions/documentAction';

export class DocumentDelete extends React.Component {
  /**
    * DocumentDelete class
    * It is for deleting a document
    */
  constructor(props) {
    super(props);
    this.state = {
      deleteDocument: {
        documentId: this.props.params.documentId
      },
      open: true,
    };
    this.onDocumentSave = this.onDocumentSave.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount() {
    this.props.actions.loadDocument(this.props.params);
  }

  onDocumentSave(event) {
    event.preventDefault();
    this.setState({ open: false });
    this.props.actions.deleteDocument(this.state.deleteDocument)
      .then(() => browserHistory.push('/documents'));
  }

  handleClose() {
    this.setState({ open: false });
    browserHistory.push('/documents')
  }

  render() {
    const actions = [
      <FlatButton
        style={{color: "red", margin: " 0 15% 0 15%", padding: " 0 4% 0 4% "}}
        label="No"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        style={{color: "green", margin: " 0 15% 0 15%", padding: " 0 4% 0 4% "}}
        label="Yes"
        primary={true}
        keyboardFocused={true}
        onClick={this.onDocumentSave}
      />]
    return (
      <div className="col-md-12">
        <DashboardHeader />
        <div>
          <MuiThemeProvider>
            <Dialog
              title="Are you sure you want to delete this document?"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              <h5>Tiltle: {this.props.documents.title}</h5>
              <p>
                {this.props.documents.content}
              </p>
            </Dialog>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

DocumentDelete.propTypes = {
  documents: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  documents: state.documents,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(documentAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentDelete);

