import { login } from '../api/userApi';
import { USER_LOGOUT_SUCCESS, USER_LOGIN_SUCCESS } from '../constants/appConstants';
import toastr from 'toastr';

export const loginUser = (user) => {
  return (dispatch) => {
    return login(user)
      .then((res) => {
        localStorage.setItem('jwt', res.data.token);
        localStorage.setItem('userId', res.data.userId);
        localStorage.setItem('userRole', res.data.userRole);
        dispatch(loginUserSuccess(res.data));
      });
  };
};

export const loginUserSuccess = (loginUser) => {
  return { type: USER_LOGIN_SUCCESS, loginUser };
};

export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
    dispatch(logoutUserSuccess());
  };
};
export const logoutUserSuccess = (loginUser) => {
  return { type: USER_LOGOUT_SUCCESS, loginUser };
};
