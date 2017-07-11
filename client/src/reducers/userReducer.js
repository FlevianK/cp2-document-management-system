import * as types from '../constants/appConstants';
import initialState from './initialState';

export default function userReducer(state = initialState.users, action) {
  switch (action.type) {
  case types.LOAD_USERS_SUCCESS:
    return action.users;

  case types.CREATE_USER_SUCCESS:
    return [
      ...state,
      Object.assign({}, action.users)
    ];

  case types.DELETE_USER_SUCCESS:
    return [
      ...state,
      Object.assign({}, action.users)
    ];

  case types.UPDATE_USER_SUCCESS:
    return [
      ...state,
      Object.assign({}, action.users)
    ];

  case types.LOAD_USER_SUCCESS:
    return action.users;

  default:
    return state;
  }
}
