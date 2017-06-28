import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import * as documentAction from '../../actions/documentAction';
import PropTypes from 'prop-types';

export class SearchDocument extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      searchValue: ''
    };
    this.onDocumentChange = this.onDocumentChange.bind(this);
    this.onDocumentClick = this.onDocumentClick.bind(this);
  }

  onDocumentChange(event) {
    console.log(event.target.value, "event")
    return this.setState({ searchValue: event.target.value });
  }

  onDocumentClick() {
    event.preventDefault();
    console.log(this.state.searchValue, "iuyftd");
    this.props.actions.searchDocument(this.state.searchValue);
  }

  render() {
    return (
      <div className="row">
        <div className="col s4 offset-m4">

          <input
            name="document"
            label="Search"
            type="search"
            onChange={this.onDocumentChange} />
        </div>
        <div className="col s4 ">
        <i className="material-icons" onClick={this.onDocumentClick} >search</i>
        </div>
      </div >
    )
  }
}

SearchDocument.PropTypes = {
  documents: PropTypes.object.isRequired
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(documentAction, dispatch)
  };
}
function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchDocument);
