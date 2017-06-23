import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { UserList, Form, UserHeader } from '../../containers';
import * as userAction from '../../actions/userAction';
import PropTypes from 'prop-types';

export class SearchUser extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            searchValue: ''
        };
        this.onUserChange = this.onUserChange.bind(this);
        this.onUserClick = this.onUserClick.bind(this);
    }

    onUserChange(event) {
        return this.setState({ searchValue: event.target.value });
    }

    onUserClick() {
        event.preventDefault();
        this.props.actions.searchUsers(this.state.searchValue);
    }

    render() {
        return (
            <div className="row">
                <div className="col s4 offset-m4">

                    <input
                        name="user"
                        label="Search"
                        type="text"
                        onChange={this.onUserChange} />
                </div>
                <div className="col s4 ">
                    <i className="material-icons" onClick={this.onUserClick} >search</i>
                </div>
            </div >
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
function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);
