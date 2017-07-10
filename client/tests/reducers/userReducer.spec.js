import expect from 'expect';
import userReducer from '../../src/reducers/userReducer';
import userPageReducer from '../../src/reducers/userPageReducer';
import userSearchReducer from '../../src/reducers/userSearchReducer';
import userSearchPageReducer from '../../src/reducers/userSearchPageReducer';
import * as actions from '../../src/actions/userAction';

describe('user reducer', () => {
  it('it should create user when passed CREATE_USER_SUCCESS', () => {
    const initialState = [
      {username: 'A'},
      {username: 'B'}
    ];
    const user = {username: 'C'};
    const action = actions.createuserSuccess(user);
    const newState = userReducer(initialState, action);
    expect(newState.length).toEqual(3);
    expect(newState[0].username).toEqual('A');
    expect(newState[1].username).toEqual('B');
    expect(newState[2].username).toEqual('C');
  });

  // it('it should delete a user when passed DELETE_USER_SUCCESS', () => {
  //   const initialState = [
  //     {id: 'A', username: 'A'},
  //     {id: 'B', username: 'B'},
  //     {id: 'C', username: 'C'}
  //   ];
  //   const users = [
  //     {id: 'A', username: 'A'},
  //     {id: 'B', username: 'B'},
  //   ];
  //   const action = actions.deleteuserSuccess(users);
  //   const newState = userReducer(initialState, action);
  //   expect(newState).toEqual(2);
  // });
  it('it should get a single user when passed LOAD_USER_SUCCESS', () => {
    const initialState = [
      {id: 'A', username: 'A'},
      {id: 'B', username: 'B'}
      ];
    const users = [
      {ids: 'A', username: 'A'}
    ];
    const action = actions.loadUserSuccess(users);
    const newState = userReducer(initialState, action);
    expect(newState.length).toEqual(1);
  });
  it('it should get all users when passed LOAD_USERS_SUCCESS', () => {
    const initialState = [];
    const users = [
      {id: 'A', username: 'A'},
      {id: 'B', username: 'B'},
      {id: 'C', username: 'C'},
      {id: 'D', username: 'D'}
    ];
    const action = actions.loadusersSuccess(users);
    const newState = userReducer(initialState, action);
    expect(newState.length).toEqual(4);
  });
    it('it should get all users according to pagination limit when passed LOAD_USERS_PAGE_SUCCESS', () => {
    const initialState = [];
    const usersPage = [
      {id: 'A', username: 'A'},
      {id: 'B', username: 'B'}
    ];
    const action = actions.loadUsersPageSuccess(usersPage);
    const newState = userPageReducer(initialState, action);
    expect(newState.length).toEqual(2);
  });
      it('it should get search result when passed SEARCH_USER_SUCCESS if the search value exists', () => {
    const initialState = [];
    const usersSearch = [
      {id: 'A', username: 'A', firstName: 'M', }
    ];
    const action = actions.searchuserSuccess(usersSearch);
    const newState = userSearchReducer(initialState, action);
    expect(newState.length).toEqual(1);
  });
  it('it should get search result according to pagination limit when passed SEARCH_USER_PAGE_SUCCESS if the search value exists', () => {
    const initialState = [];
    const usersSearchPage = [
      {id: 'A', username: 'A', firstName: 'B'},
      {id: 'B', username: 'B', firstName: 'B'}
    ];
    const action = actions.searchuserpagesuccess(usersSearchPage);
    const newState = userSearchPageReducer(initialState, action);
    expect(newState.length).toEqual(2);
  });

})
