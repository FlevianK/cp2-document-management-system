import * as types from '../constants/appConstants';
import initialState from './initialState';

export default function userSearchReducer(state = initialState.usersSearch, action) {
  switch (action.type) {
  case types.SEARCH_USER_SUCCESS:
    return action.usersSearch;

  default:
    return state;
  }
}

