import * as types from '../constants/appConstants';
import initialState from './initialState';

export default function documentsReducer(state = initialState.allDocuments, action) {
  switch (action.type) {
  case types.LOAD_DOCUMENTS_SUCCESS:
    return action.allDocuments;

  default:
    return state;
  }
}
