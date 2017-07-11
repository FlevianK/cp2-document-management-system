import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import { Input } from '../../containers';
import DashboardHeader from './../DashboardHeader';
import * as documentAction from '../../actions/documentAction';

export class DocumentCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newDocument: {
        title: '',
        content: '',
        access: ''
      }
    };
    this.onDocumentChange = this.onDocumentChange.bind(this);
    this.onDocumentSave = this.onDocumentSave.bind(this);
  }

  onDocumentChange(event) {
    event.preventDefault();
    const field = event.target.name;
    const newDocument = this.state.newDocument;
    newDocument[field] = event.target.value;
    return this.setState({ newDocument });
  }

  onDocumentSave(event) {
    event.preventDefault();
    this.props.actions.createDocument(this.state.newDocument)
      .then(() => browserHistory.push('/documents'))
      .catch((error) => {
        toastr.error(error.response.data.message);
      });
  }

  render() {
    return (
      <div>
        <DashboardHeader />
        <form>
          <Input
            name="title"
            label="Title"
            type="text"
            onChange={this.onDocumentChange}
          />

          <textarea
            name="content"
            label="Content"
            type="text"
            onChange={this.onDocumentChange}
          />

          <div>
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

          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.onDocumentSave}
          />
        </form>
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
