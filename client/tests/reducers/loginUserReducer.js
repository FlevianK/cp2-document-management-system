import expect from 'expect';
import loginUserReducer from '../../src/reducers/loginUserReducer';
import * as actions from '../../src/actions/loginAction';

describe('login reducer', () => {
  it('it should get user token, role and id when passed USER_LOGIN_SUCCESS', () => {
    const initialState = [];
    const loginUser = [
      { token: 'hgvvc.hjgc' }
    ];
    const action = actions.loginUserSuccess(loginUser);
    const newState = loginUserReducer(initialState, action);
    expect(newState.length).toEqual(1);
  });
  it('it should log out a user when passed USER_LOGOUT_SUCCESS', () => {
    const initialState = [
      { token: 'hgvvc.hjgc' }];
    const loginUser = [
    ];
    const action = actions.logoutUserSuccess(loginUser);
    const newState = loginUserReducer(initialState, action);
    expect(newState.length).toEqual(0);
  });
});
