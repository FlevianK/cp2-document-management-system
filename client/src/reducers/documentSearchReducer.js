import * as types from '../constants/appConstants';
import initialState from './initialState';

export default function documentSearchReducer(state = initialState.documentsSearch, action) {
  switch (action.type) {
  case types.SEARCH_DOCUMENT_SUCCESS:
    return action.documentsSearch;

  default:
    return state;
  }
}
