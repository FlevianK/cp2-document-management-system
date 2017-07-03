import expect from 'expect';
import userReducer from '../../src/reducers/userReducer';
import * as actions from '../../src/actions/userAction';

describe('user reducer', () => {
  it('it should create user when passed CREATE_USER_SUCCESS', () => {
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ];
    const user = {title: 'C'};
    const action = actions.createuserSuccess(user);
    const newState = userReducer(initialState, action);
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
  });

  it('it should delete a user when passed DELETE_USER_SUCCESS', () => {
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'}
    ];
    const userId = 'B';
    const action = actions.deleteuserSuccess(userId);
    const newState = userReducer(initialState, action);
    expect(newState.length).toEqual(1);
  });

  // it('it should get all users when passed LOAD_USERS_SUCCESS', () => {
  //   const initialState = [];
  //   const users = [
  //     {id: 'A', title: 'A'},
  //     {id: 'B', title: 'B'}
  //   ];
  //   const action = actions.loadusersSuccess(users);
  //   const newState = userReducer(initialState, action);
  //   expect(newState.length).toEqual(2);
  // });

})
