import * as types from '../constants/appConstants';
import initialState from './initialState';
import { browserHistory } from 'react-router';

export default function userReducer(state = initialState.users, action) {
  switch (action.type) {
    case types.LOAD_USERS_SUCCESS:
      return action.users.data

    case types.CREATE_USER_SUCCESS:
      browserHistory.push('/users')
      return action.users.data

    case types.DELETE_USER_SUCCESS:
      browserHistory.push('/users')
      return action.users.data

    case types.UPDATE_USER_SUCCESS:
      browserHistory.push('/users')
      return action.users.data

    case types.SEARCH_USER_SUCCESS:
      return console.log(action.users.data)

    default:
      return state;
  }
}
