import expect from 'expect';
import roleReducer from '../../src/reducers/roleReducer';
import * as actions from '../../src/actions/roleAction';

describe('role reducer', () => {
  it('it should create user when passed CREATE_ROLE_SUCCESS', () => {
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ];
    const role = {title: 'C'};
    const action = actions.createroleSuccess(role);
    const newState = roleReducer(initialState, action);
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
  });

  it('it should delete a role when passed DELETE_ROLE_SUCCESS', () => {
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ];
    const roleId = 'B';
    const action = actions.deleteroleSuccess(roleId);
    const newState = roleReducer(initialState, action);
    expect(newState.length).toEqual(1);
  });

})
