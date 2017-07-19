import { LOAD_DOCUMENTS_SUCCESS } from '../constants/appConstants';
import initialState from './initialState';

export default function documentsReducer(state = initialState.allDocuments, action) {
  switch (action.type) {
  case LOAD_DOCUMENTS_SUCCESS:
    return action.allDocuments;

  default:
    return state;
  }
}
