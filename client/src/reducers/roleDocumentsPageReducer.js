import { LOAD_ROLE_DOCUMENTS_PAGE_SUCCESS } from '../constants/appConstants';
import initialState from './initialState';

export default function roleDocumentsPageReducer(state = initialState.roleDocumentsPage, action) {
  switch (action.type) {
  case LOAD_ROLE_DOCUMENTS_PAGE_SUCCESS:
    return action.roleDocumentsPage;


  default:
    return state;
  }
}

