import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';
import toastr from 'toastr';
import { Input, SelectOptions } from '../../containers';
import * as documentAction from '../../actions/documentAction';
import DashboardHeader from './../DashboardHeader';

export class DocumentUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      documents: {
        documentId: this.props.params.documentId
      },
      open: true
    };
    this.onDocumentChange = this.onDocumentChange.bind(this);
    this.onDocumentUpdate = this.onDocumentUpdate.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount() {
    this.props.actions.loadDocument(this.props.params);
  }

  componentWillReceiveProps(nextProps) {
    const document = nextProps.documents;
    this.setState({
      documents: document
    });
  }

  onDocumentChange(event) {
    
    event.preventDefault();
    const field = event.target.name;
    const documents = this.state.documents;
    documents[field] = event.target.value;
    return this.setState({ documents });
  }

  onDocumentUpdate(event) {
    event.preventDefault();
    this.props.actions.updateDocument(this.state.documents)
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
        label="Update"
        primary={true}
        keyboardFocused={true}
        onClick={this.onDocumentUpdate}
      />]
    const accessOption = [{ value: '', text: 'select access type' }, { value: 'private', text: 'Private' }, { value: 'public', text: 'Public' }, { value: this.props.userRole, text: 'Role' }];
    return (
      <div>
        <DashboardHeader />
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
                  value={this.state.documents.title}
                  onChange={this.onDocumentChange}
                />
                <div className="row">
                  <div className="col s10 offset-m1">
                    <textarea
                      name="content"
                      label="Content"
                      type="text"
                      value={this.state.documents.content}
                      onChange={this.onDocumentChange}
                    />
                  </div>
                </div>
                <SelectOptions
                  options={accessOption}
                  name="access"
                  label="Access Type"
                  value={this.state.documents.access}
                  onChange={this.onDocumentChange}
                />
              </form>
            </Dialog>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

DocumentUpdate.propTypes = {
  documents: PropTypes.object.isRequired,
  access: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  userRole: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  documents: state.documents,
  userRole: state.loginUser.userRole,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(documentAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentUpdate);
