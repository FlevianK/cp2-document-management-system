import * as types from '../constants/appConstants';
import initialState from './initialState';

export default function roleSearchPageReducer(state = initialState.rolesSearchPage, action) {
  switch (action.type) {
  case types.SEARCH_ROLE_PAGE_SUCCESS:
    return action.rolesSearchPage;

  default:
    return state;
  }
}
