import expect from 'expect';
import roleReducer from '../../src/reducers/role/roleReducer';
import rolePageReducer from '../../src/reducers/role/rolePageReducer';
import roleSearchReducer from '../../src/reducers/role/roleSearchReducer';
import roleSearchPageReducer from '../../src/reducers/role/roleSearchPageReducer';
import * as actions from '../../src/actions/roleAction';

describe('role reducer', () => {
  it('it should create user when passed CREATE_ROLE_SUCCESS', () => {
    const initialState = [
      { title: 'A' },
      { title: 'B' }
    ];
    const role = { title: 'C' };
    const action = actions.createroleSuccess(role);
    const newState = roleReducer(initialState, action);
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
  });
  it('it should get all roles when passed LOAD_ROLES_SUCCESS', () => {
    const initialState = [];
    const roles = [
      { title: 'A' },
      { title: 'B' },
      { title: 'C' },
      { title: 'D' }
    ];
    const action = actions.loadRolesSuccess(roles);
    const newState = roleReducer(initialState, action);
    expect(newState.length).toEqual(4);
  });
  it('it should get all roles according to pagination limit when passed LOAD_ROLES_PAGE_SUCCESS', () => {
    const initialState = [];
    const rolesPage = [
      { title: 'A' },
      { title: 'B' }
    ];
    const action = actions.loadRolesPageSuccess(rolesPage);
    const newState = rolePageReducer(initialState, action);
    expect(newState.length).toEqual(2);
  });
  it('it should get search result when passed SEARCH_ROLE_SUCCESS if the search value exists', () => {
    const initialState = [];
    const rolesSearch = [
      { title: 'M', }
    ];
    const action = actions.searchroleSuccess(rolesSearch);
    const newState = roleSearchReducer(initialState, action);
    expect(newState.length).toEqual(1);
  });
  it('it should get search result according to pagination limit when passed SEARCH_ROLE_PAGE_SUCCESS if the search value exists', () => {
    const initialState = [];
    const rolesSearchPage = [
      { title: 'B' },
      { title: 'BA' }
    ];
    const action = actions.searchrolepagesuccess(rolesSearchPage);
    const newState = roleSearchPageReducer(initialState, action);
    expect(newState.length).toEqual(2);
  });
  it('it should get a single role when passed LOAD_ROLE_SUCCESS', () => {
    const initialState = [
      { id: 'A', title: 'A' },
      { id: 'B', title: 'B' }
    ];
    const roles = [
      { id: 'A', title: 'A' }
    ];
    const action = actions.loadRoleSuccess(roles);
    const newState = roleReducer(initialState, action);
    expect(newState.length).toEqual(1);
  });
});
