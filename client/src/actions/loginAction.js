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
        toastr.error(error.response.data.message);
      });
  };
}

export function loginUserSuccess(loginUser) {
  return { type: 'USER_LOGIN_SUCCESS', loginUser};
}

export function logoutUser() {
  return function (dispatch) {
    localStorage.removeItem('jwt');
    console.log(loginUser)
    
    dispatch(logoutUserSuccess());
  }
}
export function logoutUserSuccess() {
  return { type: 'USER_LOGOUT_SUCCESS' };
}
