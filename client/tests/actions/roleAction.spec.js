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
    it('should update a role UPDATE_ROLE_SUCCESS action', () => {
      const roles = { id: 3, title: 'fellow'};
      const expectedAction = {
        type: types.UPDATE_ROLE_SUCCESS,
        roles
      };
      const action = roleAction.updateRoleSuccess(roles);

      expect(action).toEqual(expectedAction);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('sync actions', () => {
  // afterEach(() => {
  //   nock.cleanAll();
  // });

  it('load all roles', () => {
    const expectedAction = [{ type: types.LOAD_ROLES_SUCCESS, body: { roles: [{ title: 'admin' }] } }];
    const store = mockStore({ roles: [] }, expectedAction);
    store.dispatch(roleAction.loadRoles()).then(() => {
      const action = store.getAction();
      expect(action[0].type).toEqual(types.LOAD_ROLES_SUCCESS);
    });
  });
  it('load all roles while paginating', () => {
    const expectedAction = [{ type: types.LOAD_ROLES_PAGE_SUCCESS, body: { rolesPage: [{ title: 'admin' }] } }];
    const store = mockStore({ rolesPage: [] }, expectedAction);
    store.dispatch(roleAction.loadRolesPage()).then(() => {
      const action = store.getAction();
      expect(action[0].type).toEqual(types.LOAD_ROLES_PAGE_SUCCESS);
    });
  });
  it('load roles search results', () => {
    const expectedAction = [{ type: types.SEARCH_ROLE_SUCCESS, body: { rolesSearch: [{title: 'admin' }] } }];
    const store = mockStore({ rolesSearch: [] }, expectedAction);
    store.dispatch(roleAction.searchRoles()).then(() => {
      const action = store.getAction();
      expect(action[0].type).toEqual(types.SEARCH_ROLE_SUCCESS);
    });
  });
  it('load roles search results while paginating', () => {
    const expectedAction = [{ type: types.SEARCH_ROLE_PAGE_SUCCESS, body: { rolesSearchPage: [{ title: 'admin' }] } }];
    const store = mockStore({ rolesSearchPage: [] }, expectedAction);
    store.dispatch(roleAction.searchRolesPage()).then(() => {
      const action = store.getAction();
      expect(action[0].type).toEqual(types.SEARCH_ROLE_PAGE_SUCCESS);
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
    const expectedAction = [{ type: types.CREATE_ROLE_SUCCESS, body: { roles: [{title: 'regular' }] } }];
    const store = mockStore({ roles: [] }, expectedAction);
    store.dispatch(roleAction.createRole(newRole)).then(() => {
      const action = store.getAction();
      expect(action[1].type).toEqual(types.CREATE_ROLE_SUCCESS);
    });
  });
  it('update role', () => {
    const updatedRole = { id: 1, title: 'fellow' };
    const expectedAction = [{ type: types.UPDATE_ROLE_SUCCESS, body: { roles: [{ id: 1, title: 'fellow' }] } }];
    const store = mockStore({ roles: [] }, expectedAction);
    store.dispatch(roleAction.updateRole(updatedRole)).then(() => {
      const action = store.getAction();
      expect(action[4].type).toEqual(types.UPDATE_ROLE_SUCCESS);
    });
  });
  it('load a single user', () => {
    const role = 1;
    const expectedAction = [{ type: types.LOAD_ROLE_SUCCESS, body: { roles: [{ id: 1, username: 'mervin' }] } }];
    const store = mockStore({ roles: [] }, expectedAction);
    store.dispatch(roleAction.loadRole(role)).then(() => {
      const action = store.getAction();
      expect(action[5].type).toEqual(types.LOAD_ROLE_SUCCESS);
    });
  });
});
