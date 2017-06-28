import * as types from '../constants/appConstants';
import initialState from './initialState';
import { browserHistory } from 'react-router';

export default function documentReducer(state = initialState.documents, action) {
  switch (action.type) {
    case types.LOAD_DOCUMENTS_SUCCESS:
    console.log(action.documents, "ugjyftdgsf")
      return action.documents

    case types.CREATE_DOCUMENT_SUCCESS:
    browserHistory.push('/documents')
      return action.documents

    case types.DELETE_DOCUMENT_SUCCESS:
      browserHistory.push('/documents')
      return action.documents

    case types.UPDATE_DOCUMENT_SUCCESS:
    browserHistory.push('/documents')
      return action.documents

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
