import { SEARCH_USER_SUCCESS } from '../constants/appConstants';
import initialState from './initialState';

export default function userSearchReducer(state = initialState.usersSearch, action) {
  switch (action.type) {
  case SEARCH_USER_SUCCESS:
    return action.usersSearch;

  default:
    return state;
  }
}
