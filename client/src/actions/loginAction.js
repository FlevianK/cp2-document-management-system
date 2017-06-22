import { login } from '../api/userApi';
import * as types from '../constants/appConstants';

export function loginUser(user) {
  return function (dispatch) {
    return login(user)
    .then(response => {
      localStorage.setItem('jwt', response.data.token);
      dispatch(loginUserSuccess());
    })
    .catch(error => {
      throw(error);
    });
  };
}

export function loginUserSuccess() {
  return { type: 'USER_LOGIN_SUCCESS' };
}
