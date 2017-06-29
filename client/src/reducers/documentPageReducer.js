import * as types from '../constants/appConstants';
import initialState from './initialState';

export default function documentPageReducer(state = initialState.documentsPage, action) {
  switch (action.type) {
    case types.LOAD_DOCUMENTS_PAGE_SUCCESS:
      return action.documentsPage

    case types.LOAD_ROLE_DOCUMENTS_PAGE_SUCCESS:
      return action.documentsPage

    default:
      return state;
  }
}

