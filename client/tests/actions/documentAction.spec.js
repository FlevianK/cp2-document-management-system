import expect from 'expect';
import * as types from '../../src/constants/appConstants';
import * as documentAction from '../../src/actions/documentAction';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Document action', () => {
  describe('create document', () => {
    it('should create a document CREATE_DOCUMENT_SUCCESS action', () => {
      const documents = { title: 'Apri Holiday', content: 'It rain heavily prevent us from having fun in the open field', access: 'public' };
      const expectedAction = {
        type: types.CREATE_DOCUMENT_SUCCESS,
        documents
      };
      const action = documentAction.createdocumentSuccess(documents);

      expect(action).toEqual(expectedAction);
    });
  });
  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);

  describe('sync actions', () => {
    // afterEach(() => {
    //   nock.cleanAll();
    // });

    it('load all documents', () => {
      const expectedAction = [{ type: types.LOAD_DOCUMENTS_SUCCESS, body: { allDocuments: [{ id: 1, title: 'rock', content: 'hey there' }] } }];
      const store = mockStore({ allDocuments: [] }, expectedAction);
      store.dispatch(documentAction.loadDocuments()).then(() => {
        const action = store.getAction();
        expect(action[0].type).toEqual(types.LOAD_DOCUMENTS_SUCCESS);
      });
    });
    it('load all documents while paginating', () => {
      const limit = 2;
      const offset = 0;
      const expectedAction = [{ type: types.LOAD_DOCUMENTS_PAGE_SUCCESS, body: { allDocumentsPage: [{ id: 1, title: 'rock', content: 'hey there' }] } }];
      const store = mockStore({ allDocumentsPage: [] }, expectedAction);
      store.dispatch(documentAction.loadDocumentsPage(limit, offset)).then(() => {
        const action = store.getAction();
        expect(action[0].type).toEqual(types.LOAD_DOCUMENTS_PAGE_SUCCESS);
      });
    });
    it('load all role documents', () => {
      const expectedAction = [{ type: types.LOAD_ROLE_DOCUMENTS_SUCCESS, body: { roleDocuments: [{ id: 1, title: 'rock', content: 'hey there' }] } }];
      const store = mockStore({ roleDocuments: [] }, expectedAction);
      store.dispatch(documentAction.loadRoleDocuments()).then(() => {
        const action = store.getAction();
        expect(action[0].type).toEqual(types.LOAD_ROLE_DOCUMENTS_SUCCESS);
      });
    });
    it('load all role documents while paginating', () => {
      const limit = 2;
      const offset = 0;
      const expectedAction = [{ type: types.LOAD_ROLE_DOCUMENTS_PAGE_SUCCESS, body: { roleDocuments: [{ id: 1, title: 'rock', content: 'hey there' }] } }];
      const store = mockStore({ roleDocuments: [] }, expectedAction);
      store.dispatch(documentAction.loadRoleDocumentsPage(limit, offset)).then(() => {
        const action = store.getAction();
        expect(action[0].type).toEqual(types.LOAD_ROLE_DOCUMENTS_PAGE_SUCCESS);
      });
    });
    it('create document', () => {
      const newDoc = { title: 'Home', content: 'coming there' };
      const expectedAction = [{ type: types.CREATE_DOCUMENT_SUCCESS, body: { documents: [{ id: 1, title: 'Home', content: 'coming there' }] } }];
      const store = mockStore({ documents: [] }, expectedAction);
      store.dispatch(documentAction.createDocument(newDoc)).then(() => {
        const action = store.getAction();
        expect(action[1].type).toEqual(types.CREATE_DOCUMENT_SUCCESS);
      });
    });
    it('delete document', () => {
      const deletedUser = 1;
      const expectedAction = [{ type: types.DELETE_DOCUMENT_SUCCESS, body: { documents: [] } }];
      const store = mockStore({ documents: [] }, expectedAction);
      store.dispatch(documentAction.deleteDocument(deletedUser)).then(() => {
        const action = store.getAction();
        expect(action[2].type).toEqual(types.DELETE_DOCUMENT_SUCCESS);
      });
    });
    it('Update document', () => {
      const updateDocs = { id: 1, title: 'siokimayu' };
      const expectedAction = [{ type: types.UPDATE_DOCUMENT_SUCCESS, body: { documents: [{ id: 1, title: 'siokimayu' }] } }];
      const store = mockStore({ documents: [] }, expectedAction);
      store.dispatch(documentAction.updateDocument(updateDocs)).then(() => {
        const action = store.getAction();
        expect(action[3].type).toEqual(types.UPDATE_DOCUMENT_SUCCESS);
      });
    });
    it('load single document', () => {
      const documentId = 1;
      const expectedAction = [{ type: types.LOAD_DOCUMENT_SUCCESS, body: { documents: [{ id: 1, title: 'siokimayu' }] } }];
      const store = mockStore({ documents: [] }, expectedAction);
      store.dispatch(documentAction.loadDocument(documentId)).then(() => {
        const action = store.getAction();
        expect(action[3].type).toEqual(types.LOAD_DOCUMENT_SUCCESS);
      });
    });
    it('load all user`s documents', () => {
      const expectedAction = [{ type: types.LOAD_ROLE_DOCUMENTS_SUCCESS, body: { documents: [{ id: 1, title: 'rock', content: 'hey there' }] } }];
      const store = mockStore({ documents: [] }, expectedAction);
      store.dispatch(documentAction.loadDoc()).then(() => {
        const action = store.getAction();
        expect(action[0].type).toEqual(types.LOAD_ROLE_DOCUMENTS_SUCCESS);
      });
    });
    it('load all user`s documents while paginating', () => {
      const limit = 2;
      const offset = 0;
      const expectedAction = [{ type: types.LOAD_DOC_PAGE_SUCCESS, body: { documentsPage: [{ id: 1, title: 'rock', content: 'hey there' }] } }];
      const store = mockStore({ documentsPage: [] }, expectedAction);
      store.dispatch(documentAction.loadDocList(limit, offset)).then(() => {
        const action = store.getAction();
        expect(action[0].type).toEqual(types.LOAD_DOC_PAGE_SUCCESS);
      });
    });
    it('search documents', () => {
      const searchValue = 1;
      const expectedAction = [{ type: types.SEARCH_DOCUMENT_SUCCESS, body: { documentsSearch: [{ id: 1, title: 'mercy' }] } }];
      const store = mockStore({ documentsSearch: [] }, expectedAction);
      store.dispatch(documentAction.searchDocuments(searchValue)).then(() => {
        const action = store.getAction();
        expect(action[0].type).toEqual(types.SEARCH_DOCUMENT_SUCCESS);
      });
    });
    it('search documents while paginating', () => {
      const searchValue = 1;
      const limit = 2;
      const offset = 0;
      const expectedAction = [{ type: types.SEARCH_DOCUMENT_PAGE_SUCCESS, body: { searchDocumentsPage: [{ id: 1, title: 'mercy' }] } }];
      const store = mockStore({ searchDocumentsPage: [] }, expectedAction);
      store.dispatch(documentAction.searchDocumentsPage(searchValue, limit, offset)).then(() => {
        const action = store.getAction();
        expect(action[0].type).toEqual(types.SEARCH_DOCUMENT_PAGE_SUCCESS);
      });
    });
  });
});
