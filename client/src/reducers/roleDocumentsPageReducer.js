import * as types from '../constants/appConstants';
import initialState from './initialState';

export default function roleDocumentsPageReducer(state = initialState.roleDocumentsPage, action) {
  switch (action.type) {
    case types.LOAD_ROLE_DOCUMENTS_PAGE_SUCCESS:
    console.log(action.roleDocumentsPage)
      return action.roleDocumentsPage


    default:
      return state;
  }
}

