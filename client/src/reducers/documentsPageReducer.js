import { LOAD_DOCUMENTS_PAGE_SUCCESS } from '../constants/appConstants';
import initialState from './initialState';

export default function documentsPageReducer(state = initialState.allDocumentsPage, action) {
  switch (action.type) {
  case LOAD_DOCUMENTS_PAGE_SUCCESS:
    return action.allDocumentsPage;

  default:
    return state;
  }
}
