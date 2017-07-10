import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { Input } from '../../containers';
import DashboardHeader from './../DashboardHeader';
import * as userAction from '../../actions/userAction';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import toastr from 'toastr';

export class UserCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: {
                username: '',
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            },
            errors: {}
        };
        this.onUserChange = this.onUserChange.bind(this);
        this.onUserSave = this.onUserSave.bind(this);
    }

    onUserChange(event) {
        event.preventDefault();
        const field = event.target.name;
        const newUser = this.state.newUser;
        newUser[field] = event.target.value;
        return this.setState({ newUser: newUser });
    }

    onUserSave(event) {
        event.preventDefault();
        this.props.actions.createUser(this.state.newUser)
        .then(() => browserHistory.push('/'))
        .catch(error => {
        toastr.error(error.response.data.message);
      });
    }
    render() {
        return (
            <div>
                <div>
                    <form>
                        <Input
                            name="username"
                            label="Username"
                            type="text"
                            onChange={this.onUserChange} />

                        <Input
                            name="firstName"
                            label="First Name"
                            type="text"
                            onChange={this.onUserChange} />

                        <Input
                            name="lastName"
                            label="Surname"
                            type="text"
                            onChange={this.onUserChange} />

                        <Input
                            name="email"
                            label="Email Address"
                            type="text"
                            onChange={this.onUserChange} />

                        <Input
                            name="password"
                            label="Password"
                            type="text"
                            onChange={this.onUserChange} />

                        <input
                            type="submit"
                            className="btn btn-primary"
                            onClick={this.onUserSave} />
                    </form>
                </div>
                <div className="row">
                    <div className="col s6 offset-m3">
                        <Link to="/" activeClassName="active">Login</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(userAction, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(UserCreate);
