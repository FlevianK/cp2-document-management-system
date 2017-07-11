import { login } from '../api/userApi';
import * as types from '../constants/appConstants';
import toastr from 'toastr';

export const loginUser = (user) => {
  return (dispatch) => {
    return login(user)
      .then((res) => {
        localStorage.setItem('jwt', res.data.token);
        dispatch(loginUserSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

export const loginUserSuccess = (loginUser) => {
  return { type: 'USER_LOGIN_SUCCESS', loginUser };
};

export function logoutUser() {
  return function (dispatch) {
    localStorage.removeItem('jwt');
    dispatch(logoutUserSuccess());
  };
}
export function logoutUserSuccess(loginUser) {
  return { type: 'USER_LOGOUT_SUCCESS', loginUser };
}
