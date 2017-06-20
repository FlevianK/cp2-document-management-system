import * as types from '../constants/appConstants';
import initialState from './initialState';
import { browserHistory } from 'react-router';

export default function documentReducer(state = initialState.documents, action) {
  switch (action.type) {
    case types.LOAD_DOCUMENTS_SUCCESS:
      return action.documents.data
    case types.CREATE_DOCUMENT_SUCCESS:
      browserHistory.push('/documents')
      return action.documents.data
    case types.DELETE_DOCUMENT_SUCCESS:
      browserHistory.push('/documents')
      return action.documents.data
      case types.UPDATE_DOCUMENT_SUCCESS:
      browserHistory.push('/documents')
      return action.documents.data
    default:
      return state;
  }
}