import expect from 'expect';
import * as types from '../../src/constants/appConstants';
import * as roleAction from '../../src/actions/roleAction';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('role action', () => {
  describe('create role', () => {
    it('should create a role CREATE_ROLE_SUCCESS action', () => {
      const roles = { title: 'admin' };
      const expectedAction = {
        type: types.CREATE_ROLE_SUCCESS,
        roles
      };
      const action = roleAction.createroleSuccess(roles);

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

  it('load all roles', () => {
    const expectedAction = [{ type: types.LOAD_ROLES_SUCCESS, body: { roles: [{ id: 1, title: 'admin' }] } }];
    const store = mockStore({ roles: [] }, expectedAction);
    store.dispatch(roleAction.loadRoles()).then(() => {
      const action = store.getAction();
      expect(action[0].type).toEqual(types.LOAD_ROLES_SUCCESS);
    });
  });
  it('load all roles while paginating', () => {
    const expectedAction = [{ type: types.LOAD_ROLES_PAGE_SUCCESS, body: { rolesPage: [{ id: 1, title: 'admin' }] } }];
    const store = mockStore({ rolesPage: [] }, expectedAction);
    store.dispatch(roleAction.loadRolesPage()).then(() => {
      const action = store.getAction();
      expect(action[0].type).toEqual(types.LOAD_ROLES_PAGE_SUCCESS);
    });
  });
  it('delete role', () => {
    const deletedRole = 'regular';
    const expectedAction = [{ type: types.DELETE_ROLE_SUCCESS, body: { roles: [] } }];
    const store = mockStore({ roles: [] }, expectedAction);
    store.dispatch(roleAction.deleteRole(deletedRole)).then(() => {
      const action = store.getAction();
      expect(action[2].type).toEqual(types.DELETE_ROLE_SUCCESS);
    });
  });
  it('create role', () => {
    const newRole = { title: 'regular' };
    const expectedAction = [{ type: types.CREATE_ROLE_SUCCESS, body: { users: [{ id: 1, username: 'regular' }] } }];
    const store = mockStore({ roles: [] }, expectedAction);
    store.dispatch(roleAction.createRole(newRole)).then(() => {
      const action = store.getAction();
      expect(action[1].type).toEqual(types.CREATE_ROLE_SUCCESS);
    });
  });
});
