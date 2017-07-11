import expect from 'expect';
import * as types from '../../src/constants/appConstants';
import * as loginAction from '../../src/actions/loginAction';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('sync login actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('login', () => {
    const user = { email: 'mick@gmail.com', password: 'htff' };
    const expectedAction = [{ type: types.USER_LOGIN_SUCCESS, body: { loginUser: [{ token: 'hgfkjh.hgfg' }] } }];
    const store = mockStore({ loginUser: [] }, expectedAction);
    store.dispatch(loginAction.loginUser(user)).then(() => {
      const action = store.getAction();
      expect(action[0].type).toEqual(types.USER_LOGIN_SUCCESS);
    });
  });
  it('logout', () => {
    const expectedAction = [{ type: types.USER_LOGOUT_SUCCESS, body: { loginUser: [] } }];
    const store = mockStore({ loginUser: [] }, expectedAction);
    store.dispatch(loginAction.logoutUser());
  });
});
