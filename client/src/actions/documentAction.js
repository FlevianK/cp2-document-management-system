import { allDocuments, createDoc, deleteDoc, allRoleDocumentPage, allDocumentsPage, updateDoc, singleDocument, allRoleDocument, allDoc, documentSearch, documentSearchPage, allDocList } from '../api/documentApi';
import * as types from '../constants/appConstants';
import toastr from 'toastr';

export function failureMessage(message) {
  return { type: 'FAILURE_MESSAGE', message };
}

export function loadDocuments() { // all documents
  return function (dispatch) {
    return allDocuments()
      .then((res) => {
        dispatch(loadDocumentsSuccess(res.data));
      })
      .catch((error) => {
        toastr.error(error.res.data.message);
      });
  };
}

export function loadDocumentsSuccess(allDocuments) {
  return { type: 'LOAD_DOCUMENTS_SUCCESS', allDocuments };
}

export function loadDocumentsPage(limit, offset) { // all documents by pagination
  return function (dispatch) {
    return allDocumentsPage(limit, offset)
      .then((res) => {
        dispatch(loadDocumentsPageSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
}

export function loadDocumentsPageSuccess(allDocumentsPage) {
  return { type: 'LOAD_DOCUMENTS_PAGE_SUCCESS', allDocumentsPage };
}

export function loadRoleDocuments() { // all documents by role
  return function (dispatch) {
    return allRoleDocument()
      .then((res) => {
        dispatch(loadRoleDocumentsSuccess(res.data));
      })
      .catch((error) => {
        toastr.error(error.res.data.message);
      });
  };
}

export function loadRoleDocumentsSuccess(roleDocuments) {
  return { type: 'LOAD_ROLE_DOCUMENTS_SUCCESS', roleDocuments };
}

export function loadRoleDocumentsPage(limit, offset) { // all documents by role while paginated
  return function (dispatch) {
    return allRoleDocumentPage(limit, offset)
      .then((res) => {
        dispatch(loadRoleDocumentsPageSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
}

export function loadRoleDocumentsPageSuccess(roleDocumentsPage) {
  return { type: 'LOAD_ROLE_DOCUMENTS_PAGE_SUCCESS', roleDocumentsPage };
}

export function createDocument(newDoc) {
  return function (dispatch) {
    return createDoc(newDoc)
      .then((res) => {
        dispatch(createdocumentSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
}

export function createdocumentSuccess(documents) {
  return { type: 'CREATE_DOCUMENT_SUCCESS', documents };
}

export function deleteDocument(deletedDoc) {
  return function (dispatch) {
    return deleteDoc(deletedDoc)
      .then((res) => {
        dispatch(deletedocumentSuccess(res.data));
      })
      .catch((error) => {
        toastr.error(error.res.data.message);
      });
  };
}

export function deletedocumentSuccess(documents) {
  return { type: 'DELETE_DOCUMENT_SUCCESS', documents };
}

export function updateDocument(updateDocs) {
  return function (dispatch) {
    return updateDoc(updateDocs)
      .then((res) => {
        dispatch(updatedocumentSuccess(res.data));
      })
      .catch((error) => {
        toastr.error(error.res.data.message);
      });
  };
}

export function updatedocumentSuccess(documents) {
  return { type: 'UPDATE_DOCUMENT_SUCCESS', documents };
}

export function loadDocument(document) { // single document
  return function (dispatch) {
    return singleDocument(document)
      .then((res) => {
        dispatch(loaddocumentSuccess(res.data));
      })
      .catch((error) => {
        toastr.error(error.res.data.message);
      });
  };
}

export function loaddocumentSuccess(documents) {
  return { type: 'LOAD_DOCUMENT_SUCCESS', documents };
}

export function loadDoc() { // all user documents
  return function (dispatch) {
    return allDoc()
      .then((res) => {
        dispatch(loaddocSuccess(res.data));
      })
      .catch((error) => {
        toastr.error(error.res.data.message);
      });
  };
}

export function loaddocSuccess(documents) {
  return { type: 'LOAD_DOC_SUCCESS', documents };
}

export function loadDocList(limit, offset) { // all user documents by page
  return function (dispatch) {
    return allDocList(limit, offset)
      .then((res) => {
        dispatch(loaddoclistSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
}

export function loaddoclistSuccess(documentsPage) {
  return { type: 'LOAD_DOC_PAGE_SUCCESS', documentsPage };
}

export function searchDocuments(searchValue) {
  return function (dispatch) {
    return documentSearch(searchValue)
      .then((res) => {
        dispatch(searchdocumentSuccess(res.data));
      })
      .catch((error) => {
        toastr.error(error.response.data.message);
      });
  };
}

export function searchdocumentSuccess(documentsSearch) {
  return { type: 'SEARCH_DOCUMENT_SUCCESS', documentsSearch };
}

export function searchDocumentsPage(searchValue, limit, offset) {
  return function (dispatch) {
    return documentSearchPage(searchValue, limit, offset)
      .then((res) => {
        dispatch(searchdocumentpagesuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
}

export function searchdocumentpagesuccess(documentsSearchPage) {
  return { type: 'SEARCH_DOCUMENT_PAGE_SUCCESS', documentsSearchPage };
}
