import * as types from '../constants/appConstants';
import initialState from './initialState';

export default function documentSearchPageReducer(state = initialState.documentsSearchPage, action) {
  switch (action.type) {
    case types.SEARCH_DOCUMENT_PAGE_SUCCESS:
      return action.documentsSearchPage

    default:
      return state;
  }
}
