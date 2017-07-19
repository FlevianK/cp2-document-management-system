import { LOAD_ROLES_PAGE_SUCCESS } from '../constants/appConstants';
import initialState from './initialState';

export default function rolePageReducer(state = initialState.rolesPage, action) {
  switch (action.type) {
  case LOAD_ROLES_PAGE_SUCCESS:
    return action.rolesPage;

  default:
    return state;
  }
}
