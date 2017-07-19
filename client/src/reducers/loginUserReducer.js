import { USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from '../constants/appConstants';
import initialState from './initialState';

export default function loginUserReducer(state = initialState.loginUser, action) {
  switch (action.type) {
  case USER_LOGIN_SUCCESS:
    return action.loginUser;

  case USER_LOGOUT_SUCCESS:
    action.loginUser = [];
    return action.loginUser;

  default:
    return state;
  }
}
