import * as types from '../constants/appConstants';
import initialState from './initialState';
import { browserHistory } from 'react-router';

export default function userReducer(state = initialState.users, action) {
    switch (action.type) {
        case types.LOAD_USERS_SUCCESS:
            return action.users

        case types.CREATE_USER_SUCCESS:
            browserHistory.push('/');
            return [
                ...state,
                Object.assign({}, action.users)
            ];

        case types.DELETE_USER_SUCCESS:
            // browserHistory.push('/users');
            return action.users

        case types.UPDATE_USER_SUCCESS:
            // browserHistory.push('/users');
            return [
                ...state.filter(users => users.id !== action.users.id),
                Object.assign({}, action.users)
            ];

        case types.SEARCH_USER_SUCCESS:
            return action.users

        case types.LOAD_USER_SUCCESS:
            return action.users

        default:
            return state;
    }
}
