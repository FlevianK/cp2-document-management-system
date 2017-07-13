import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../../src/reducers/rootReducer';
import initialState from '../../src/reducers/initialState';
import * as documentAction from '../../src/actions/documentAction';

describe('Integration test for store, action and reducer', () => {
  it('should handle creating documents', () => {
    const store = createStore(rootReducer, initialState);
    const document = {
      title: 'HongKong'
    };
    const action = documentAction.createdocumentSuccess(document);
    store.dispatch(action);

    const actual = store.getState().documents[0];
    const expected = {
      title: 'HongKong'
    };

    expect(actual).toEqual(expected);
  });
});
