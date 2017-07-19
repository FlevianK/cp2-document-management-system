import { SEARCH_DOCUMENT_PAGE_SUCCESS } from '../constants/appConstants';
import initialState from './initialState';

export default function documentSearchPageReducer(state = initialState.documentsSearchPage, action) {
  switch (action.type) {
  case SEARCH_DOCUMENT_PAGE_SUCCESS:
    return action.documentsSearchPage;

  default:
    return state;
  }
}
