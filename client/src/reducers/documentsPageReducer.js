import * as types from '../constants/appConstants';
import initialState from './initialState';

export default function documentsPageReducer(state = initialState.allDocumentsPage, action) {
  switch (action.type) {
    case types.LOAD_DOCUMENTS_PAGE_SUCCESS:
      return action.allDocumentsPage

    case types.SEARCH_DOCUMENT_SUCCESS:
      return action.allDocumentsPage

    default:
      return state;
  }
}
