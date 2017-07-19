import { SEARCH_DOCUMENT_SUCCESS } from '../constants/appConstants';
import initialState from './initialState';

export default function documentSearchReducer(state = initialState.documentsSearch, action) {
  switch (action.type) {
  case SEARCH_DOCUMENT_SUCCESS:
    return action.documentsSearch;

  default:
    return state;
  }
}
