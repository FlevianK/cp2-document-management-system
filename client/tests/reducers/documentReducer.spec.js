import expect from 'expect';
import documentReducer from '../../src/reducers/document/documentReducer';
import documentPageReducer from '../../src/reducers/document/documentPageReducer';
import documentsReducer from '../../src/reducers/document/documentsReducer';
import documentsPageReducer from '../../src/reducers/document/documentsPageReducer';
import documentSearchReducer from '../../src/reducers/document/documentSearchReducer';
import documentSearchPageReducer from '../../src/reducers/document/documentSearchPageReducer';
import roleDocumentsReducer from '../../src/reducers/document/roleDocumentsReducer';
import roleDocumentsPageReducer from '../../src/reducers/document/roleDocumentsPageReducer';
import * as actions from '../../src/actions/documentAction';

describe('document reducer', () => {
  it('it should create document when passed CREATE_DOCUMENT_SUCCESS', () => {
    const initialState = [
      { title: 'A' },
      { title: 'B' }
    ];
    const newDocument = { title: 'C' };
    const action = actions.createdocumentSuccess(newDocument);
    const newState = documentReducer(initialState, action);
    expect(newState.length).toEqual(3);
  });
  it('it should get a single document when passed LOAD_DOCUMENT_SUCCESS', () => {
    const initialState = [
      { id: 'A', title: 'A' },
      { id: 'B', title: 'B' }];
    const documents = [
      { id: 'A', title: 'A' }
    ];
    const action = actions.loaddocumentSuccess(documents);
    const newState = documentReducer(initialState, action);
    expect(newState.length).toEqual(1);
  });
  it('it should get all documents when passed LOAD_DOCUMENTS_SUCCESS', () => {
    const initialState = [];
    const allDocuments = [
      { id: 'A', title: 'A' },
      { id: 'B', title: 'B' },
      { id: 'C', title: 'C' },
      { id: 'D', title: 'D' },
    ];
    const action = actions.loadDocumentsSuccess(allDocuments);
    const newState = documentsReducer(initialState, action);
    expect(newState.length).toEqual(4);
  });
  it('it should get all documents according to pagination limit when passed LOAD_DOCUMENTS_PAGE_SUCCESS', () => {
    const initialState = [];
    const allDocumentsPage = [
      { id: 'A', title: 'A' },
      { id: 'B', title: 'B' }
    ];
    const action = actions.loadDocumentsPageSuccess(allDocumentsPage);
    const newState = documentsPageReducer(initialState, action);
    expect(newState.length).toEqual(2);
  });
  it('it should get all role documents when passed LOAD_ROLE_DOCUMENTS_SUCCESS', () => {
    const initialState = [];
    const roleDocuments = [
      { id: 'A', title: 'A' },
      { id: 'B', title: 'B' },
      { id: 'C', title: 'C' },
      { id: 'D', title: 'D' },
    ];
    const action = actions.loadRoleDocumentsSuccess(roleDocuments);
    const newState = roleDocumentsReducer(initialState, action);
    expect(newState.length).toEqual(4);
  });
  it('it should get all role documents according to pagination limit when passed LOAD_ROLE_DOCUMENTS_PAGE_SUCCESS', () => {
    const initialState = [];
    const roleDocumentsPage = [
      { id: 'A', title: 'A' },
      { id: 'B', title: 'B' }
    ];
    const action = actions.loadRoleDocumentsPageSuccess(roleDocumentsPage);
    const newState = roleDocumentsPageReducer(initialState, action);
    expect(newState.length).toEqual(2);
  });
  it('it should get all user`s documents when passed LOAD_DOC_SUCCESS', () => {
    const initialState = [];
    const documents = [
      { id: 'A', title: 'A' },
      { id: 'B', title: 'B' },
      { id: 'C', title: 'C' },
      { id: 'D', title: 'D' },
    ];
    const action = actions.loaddocSuccess(documents);
    const newState = documentReducer(initialState, action);
    expect(newState.length).toEqual(4);
  });
  it('it should get all user`s documents according to pagination limit when passed LOAD_DOC_PAGE_SUCCESS', () => {
    const initialState = [];
    const documentsPage = [
      { id: 'A', title: 'A' },
      { id: 'B', title: 'B' }
    ];
    const action = actions.loaddoclistSuccess(documentsPage);
    const newState = documentPageReducer(initialState, action);
    expect(newState.length).toEqual(2);
  });
  it('it should get search result when passed SEARCH_DOCUMENT_SUCCESS if the search value exists', () => {
    const initialState = [];
    const documentsSearch = [
      { id: 'A', title: 'A', content: 'M', }
    ];
    const action = actions.searchdocumentSuccess(documentsSearch);
    const newState = documentSearchReducer(initialState, action);
    expect(newState.length).toEqual(1);
  });
  it('it should get search result according to pagination limit when passed SEARCH_DOCUMENT_PAGE_SUCCESS if the search value exists', () => {
    const initialState = [];
    const documentsSearchPage = [
      { id: 'A', title: 'A', content: 'B' },
      { id: 'B', title: 'B', content: 'B' }
    ];
    const action = actions.searchdocumentpagesuccess(documentsSearchPage);
    const newState = documentSearchPageReducer(initialState, action);
    expect(newState.length).toEqual(2);
  });
});
