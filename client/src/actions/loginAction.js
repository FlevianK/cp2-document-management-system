import { login } from '../api/userApi';
import * as types from '../constants/appConstants';
import toastr from 'toastr';

export function loginUser(user) {
  return function (dispatch) {
    return login(user)
      .then(res => {
        localStorage.setItem('jwt', res.data.token);
        dispatch(loginUserSuccess(res.data));
      })
      .catch(error => {
        throw(error);
      });
  };
}

export function loginUserSuccess(loginUser) {
  return { type: 'USER_LOGIN_SUCCESS', loginUser};
}

export function logoutUser() {
  return function (dispatch) {
    localStorage.removeItem('jwt');
    dispatch(logoutUserSuccess());
  }
}
export function logoutUserSuccess(loginUser) {
  return { type: 'USER_LOGOUT_SUCCESS', loginUser};
}
