import * as types from '../constants/appConstants';
import initialState from './initialState';

export default function userPageReducer(state = initialState.usersPage, action) {
  switch (action.type) {
    case types.LOAD_USERS_PAGE_SUCCESS:
      return action.usersPage

    default:
      return state;
  }
}

