import * as types from '../constants/appConstants';
import initialState from './initialState';

export default function documentReducer(state = initialState.documents, action) {
  switch (action.type) {
    case types.LOAD_DOCUMENTS_SUCCESS:
      return action.documents

    case types.CREATE_DOCUMENT_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.documents)
      ];

    case types.DELETE_DOCUMENT_SUCCESS:
      return action.documents

    case types.UPDATE_DOCUMENT_SUCCESS:
      return [
        ...state.filter(documents => documents.id !== action.documents.id),
        Object.assign({}, action.documents)
      ];

    case types.LOAD_DOCUMENT_SUCCESS:
      return action.documents

    case types.SEARCH_DOCUMENT_SUCCESS:
      return action.documents

    case types.LOAD_DOC_SUCCESS:
      return action.documents

    case types.LOAD_ROLE_DOCUMENTS_SUCCESS:
      return action.documents

    default:
      return state;
  }
}
