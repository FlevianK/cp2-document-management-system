import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Input, DocumentHeader } from '../../containers';
import DashboardHeader from '../common/DashboardHeader';
import * as documentAction from '../../actions/documentAction';

export class DocumentCreate extends React.Component {
  /**
    * DocumentCreate class
    * It is for creating a document
    */
  constructor(props) {
    super(props);
    this.state = {
      newDocument: {
        title: '',
        content: '',
        access: ''
      },
      open: true
    };
    this.onDocumentChange = this.onDocumentChange.bind(this);
    this.onDocumentCreate = this.onDocumentCreate.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  onDocumentChange(event) {
    event.preventDefault();
    const field = event.target.name;
    const newDocument = this.state.newDocument;
    newDocument[field] = event.target.value;
    return this.setState({ newDocument });
  }

  onDocumentCreate(event) {
    event.preventDefault();
    this.props.actions.createDocument(this.state.newDocument)
      .then(() => {
        this.setState({ open: false });
        browserHistory.push('/documents');
      })
      .catch((error) => {
        toastr.error(error.response.data.message);
      });
  }

  handleClose() {
    this.setState({ open: false });
    browserHistory.push('/documents');
  }

  render() {
    const actions = [
      <FlatButton
        style={{color: "red", margin: " 0 15% 0 15%", padding: " 0 4% 0 4% "}}
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        style={{color: "green", margin: " 0 15% 0 15%", padding: " 0 4% 0 4% "}}
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.onDocumentCreate}
      />];
    return (
      <div>
        <DashboardHeader />
        <DocumentHeader />
        <div>
          <MuiThemeProvider>
            <Dialog
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              <form>
                <Input
                  name="title"
                  label="Title"
                  type="text"
                  onChange={this.onDocumentChange}
                />
                <div className="row">
                  <div className="col s10 offset-m1">
                    <textarea
                      name="content"
                      label="Content"
                      type="text"
                      onChange={this.onDocumentChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col s10 offset-m1">
                    <label>Access</label>
                    <div>
                      <select name="access" className="browser-default" onChange={this.onDocumentChange}>
                        <option value="" disabled selected>Select access type</option>
                        <option value="public" >Public</option>
                        <option value="private">Private</option>
                        <option value={this.props.userRole}>Role</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </Dialog>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

DocumentCreate.propTypes = {
  userRole: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};


const mapStateToProps = (state, ownProps) => ({
  userRole: state.loginUser.userRole
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(documentAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentCreate);
