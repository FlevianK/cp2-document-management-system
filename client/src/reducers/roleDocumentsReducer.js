import * as types from '../constants/appConstants';
import initialState from './initialState';

export default function roleDocumentsReducer(state = initialState.roleDocuments, action) {
  switch (action.type) {
  case types.LOAD_ROLE_DOCUMENTS_SUCCESS:
    return action.roleDocuments;

  default:
    return state;
  }
}

