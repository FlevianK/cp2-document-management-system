import React from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { UserList, Form, UserHeader } from '../../containers';
import * as userAction from '../../actions/userAction';
import PropTypes from 'prop-types';
 
class SearchUser extends React.Component {
  constructor(props, context) {
    super(props, context);
    // this.state = {
    //   user: { searchName:''}
    // };
    this.onUserChange = this.onUserChange.bind(this);
    this.onUserClick = this.onUserClick.bind(this);
  }

  onUserChange(event) {
    // const field = event.target.name;
    // const user = this.state.user;
    // user[field] = event.target.value;
    return this.setState({ searchValue: event.target.value});
  }

  onUserClick(searchValue) {
    event.preventDefault();
    this.props.actions.searchsUser(searchValue);
  }

  render () {
    return (
      <div className="col-md-12">
        <form>
          <Form
            name="user"
            label="Search"
            type="text"
            onChange={this.onUserChange}
            onClick={this.onUserClick} />
          </form>
      </div>
    )
  }
}

SearchUser.PropTypes = {
  users: PropTypes.object.isRequired
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userAction, dispatch)
  };
}

export default connect( mapDispatchToProps)(SearchUser);
 