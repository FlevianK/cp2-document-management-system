import expect from 'expect';
import * as types from '../../src/constants/appConstants';
import * as documentAction from '../../src/actions/documentAction';

describe('Document action', () => {
  describe('create document', () => {
    it('should create a document CREATE_DOCUMENT_SUCCESS action', () => {
      const newDoc = {title: 'Apri Holiday', content: 'It rain heavily prevent us from having fun in the open field', access: 'public'};
      const expectedAction = {
        type: types.CREATE_DOCUMENT_SUCCESS,
        document: document
      };
      const action = documentAction.createdocumentSuccess(document);

      expect(action).toEqual(expectedAction);
    });
  });
});