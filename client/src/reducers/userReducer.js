import { LOAD_USERS_SUCCESS, CREATE_USER_SUCCESS, DELETE_USER_SUCCESS, UPDATE_USER_SUCCESS, LOAD_USER_SUCCESS} from '../constants/appConstants';
import initialState from './initialState';

export default function userReducer(state = initialState.users, action) {
  switch (action.type) {
  case LOAD_USERS_SUCCESS:
    return action.users;

  case CREATE_USER_SUCCESS:
    return [
      ...state,
      Object.assign({}, action.users)
    ];

  case DELETE_USER_SUCCESS:
    return [
      ...state,
      Object.assign({}, action.users)
    ];

  case UPDATE_USER_SUCCESS:
    return [
      ...state,
      Object.assign({}, action.users)
    ];

  case LOAD_USER_SUCCESS:
    return action.users;

  default:
    return state;
  }
}
