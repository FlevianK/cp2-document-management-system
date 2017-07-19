import { LOAD_ROLE_DOCUMENTS_SUCCESS } from '../constants/appConstants';
import initialState from './initialState';

export default function roleDocumentsReducer(state = initialState.roleDocuments, action) {
  switch (action.type) {
  case LOAD_ROLE_DOCUMENTS_SUCCESS:
    return action.roleDocuments;

  default:
    return state;
  }
}

