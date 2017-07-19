import { LOAD_DOC_SUCCESS, CREATE_DOCUMENT_SUCCESS, DELETE_DOCUMENT_SUCCESS, UPDATE_DOCUMENT_SUCCESS, LOAD_DOCUMENT_SUCCESS } from '../constants/appConstants';
import initialState from './initialState';

export default function documentReducer(state = initialState.documents, action) {
  switch (action.type) {
  case LOAD_DOC_SUCCESS:
    return action.documents;

  case CREATE_DOCUMENT_SUCCESS:
    return [
      ...state,
      Object.assign({}, action.documents)
    ];

  case DELETE_DOCUMENT_SUCCESS:
    return [
      ...state,
      Object.assign({}, action.documents)
    ];

  case UPDATE_DOCUMENT_SUCCESS:
    return [
      ...state,
      Object.assign({}, action.documents)
    ];

  case LOAD_DOCUMENT_SUCCESS:
    return action.documents;

  default:
    return state;
  }
}
