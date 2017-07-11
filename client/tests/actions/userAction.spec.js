import expect from 'expect';
import * as types from '../../src/constants/appConstants';
import * as userAction from '../../src/actions/userAction';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('User action', () => {
  describe('create user', () => {
    it('should create a user CREATE_USER_SUCCESS action', () => {
      const users = { username: 'mick', firstName: 'hey', lastName: 'hip', email: 'mick@gmail.com', password: 'public' };
      const expectedAction = {
        type: types.CREATE_USER_SUCCESS,
        users
      };
      const action = userAction.createuserSuccess(users);

      expect(action).toEqual(expectedAction);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('sync actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('load all users', () => {
    const expectedAction = [{ type: types.LOAD_USERS_SUCCESS, body: { usersPage: [{ id: 1, username: 'mick', firstNme: 'hey' }] } }];
    const store = mockStore({ usersPage: [] }, expectedAction);
    store.dispatch(userAction.loadUsers()).then(() => {
      const action = store.getAction();
      expect(action[0].type).toEqual(types.LOAD_USERS_SUCCESS);
    });
  });
  it('search user', () => {
    const searchValue = 1;
    const expectedAction = [{ type: types.SEARCH_USER_SUCCESS, body: { usersSearch: [{ id: 1, title: 'mercy' }] } }];
    const store = mockStore({ usersSearch: [] }, expectedAction);
    store.dispatch(userAction.searchUser(searchValue)).then(() => {
      const action = store.getAction();
      expect(action[0].type).toEqual(types.SEARCH_USER_SUCCESS);
    });
  });
  it('search user while paginating', () => {
    const searchValue = 1;
    const limit = 2;
    const offset = 0;
    const expectedAction = [{ type: types.SEARCH_USER_PAGE_SUCCESS, body: { usersSearchPage: [{ id: 1, title: 'mercy' }] } }];
    const store = mockStore({ usersSearchPage: [] }, expectedAction);
    store.dispatch(userAction.searchUsersPage(searchValue, limit, offset)).then(() => {
      const action = store.getAction();
      expect(action[0].type).toEqual(types.SEARCH_USER_PAGE_SUCCESS);
    });
  });
  it('delete user', () => {
    const deletedUser = 1;
    const expectedAction = [{ type: types.DELETE_USER_SUCCESS, body: { users: [] } }];
    const store = mockStore({ users: [] }, expectedAction);
    store.dispatch(userAction.deleteUser(deletedUser)).then(() => {
      const action = store.getAction();
      expect(action[0].type).toEqual(types.DELETE_USER_SUCCESS);
    });
  });
  it('load all paginated users', () => {
    const limit = 2;
    const offset = 0;
    const expectedAction = [{ type: types.LOAD_USERS_PAGE_SUCCESS, body: { usersPage: [{ id: 1, username: 'mervin' }] } }];
    const store = mockStore({ usersPage: [] }, expectedAction);
    store.dispatch(userAction.loadUsersPage(limit, offset)).then(() => {
      const action = store.getAction();
      expect(action[0].type).toEqual(types.LOAD_USERS_PAGE_SUCCESS);
    });
  });
  it('update user', () => {
    const updatedUser = { id: 1, title: 'fakeyith' };
    const expectedAction = [{ type: types.UPDATE_USER_SUCCESS, body: { users: [{ id: 1, title: 'fakeyith' }] } }];
    const store = mockStore({ users: [] }, expectedAction);
    store.dispatch(userAction.updateUser(updatedUser)).then(() => {
      const action = store.getAction();
      expect(action[0].type).toEqual(types.UPDATE_USER_SUCCESS);
    });
  });
  it('create user', () => {
    const newUser = { username: 'mery' };
    const expectedAction = [{ type: types.CREATE_USER_SUCCESS, body: { users: [{ id: 1, username: 'mery' }] } }];
    const store = mockStore({ users: [] }, expectedAction);
    store.dispatch(userAction.createUser(newUser)).then(() => {
      const action = store.getAction();
      expect(action[0].type).toEqual(types.CREATE_USER_SUCCESS);
    });
  });
  it('load a single user', () => {
    const user = 1;
    const expectedAction = [{ type: types.LOAD_USER_SUCCESS, body: { users: [{ id: 1, username: 'mervin' }] } }];
    const store = mockStore({ users: [] }, expectedAction);
    store.dispatch(userAction.loadUser(user)).then(() => {
      const action = store.getAction();
      expect(action[0].type).toEqual(types.LOAD_USER_SUCCESS);
    });
  });
});
