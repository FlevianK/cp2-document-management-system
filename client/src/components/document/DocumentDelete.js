import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { Input } from '../../containers';
import DashboardHeader from './../DashboardHeader';
import * as documentAction from '../../actions/documentAction';
import PropTypes from 'prop-types';

export class DocumentDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteDocument: {
        documentId: this.props.params.documentId
      }
    };
    this.onDocumentSave = this.onDocumentSave.bind(this);
  }

  componentWillMount() {
    this.props.actions.loadDocument(this.props.params);
  }

  onDocumentSave(event) {
    event.preventDefault();
    this.props.actions.deleteDocument(this.state.deleteDocument).then(() => browserHistory.push('/documents'));
  }

  render() {
    return (
      <div className="col-md-12">
        <DashboardHeader />
        <form>
          <Input
            label="Title"
            value={this.props.documents.title}
          />

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

