import * as types from '../constants/appConstants';
import initialState from './initialState';

export default function documentPageReducer(state = initialState.documentsPage, action) {
  switch (action.type) {
    case types.LOAD_DOCUMENTS_SUCCESS:
      return action.documents

    default:
      return state;
  }
}

