import { LOAD_DOC_PAGE_SUCCESS } from '../constants/appConstants';
import initialState from './initialState';

export default function documentPageReducer(state = initialState.documentsPage, action) {
  switch (action.type) {
  case LOAD_DOC_PAGE_SUCCESS:
    return action.documentsPage;

  default:
    return state;
  }
}
