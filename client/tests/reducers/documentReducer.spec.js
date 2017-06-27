import expect from 'expect';
import documentReducer from '../../src/reducers/documentReducer';
import * as actions from '../../src/actions/documentAction';

describe('document reducer', () => {
  it('it should create document when passed CREATE_DOCUMENT_SUCCESS', () => {
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ];
    const newDocument = {title: 'C'};
    const action = actions.createdocumentSuccess(newDocument);
    const newState = documentReducer(initialState, action);
    expect(newState.length).toEqual(3);
  });
});
