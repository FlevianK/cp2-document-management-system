import * as types from '../constants/appConstants';
import initialState from './initialState';

export default function roleReducer(state = initialState.roles, action) {
  switch (action.type) {
    case types.LOAD_ROLES_SUCCESS:
      return action.roles.data

    case types.CREATE_ROLE_SUCCESS:
      return action.roles.data

    case types.DELETE_ROLE_SUCCESS:
      return action.roles.data

    default:
      return state;
  }
}
