import { allDocuments, createDoc, deleteDoc, updateDoc, allDocument, allDoc, documentSearch } from '../api/documentApi';
import * as types from '../constants/appConstants';

export function loadDocuments() {
  return function (dispatch) {
    return allDocuments()
      .then(documents => {
        dispatch(loadDocumentsSuccess(documents));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function loadDocumentsSuccess(documents) {
  return { type: 'LOAD_DOCUMENTS_SUCCESS', documents };
}

export function createDocument(newDoc) {
  return function (dispatch) {
    return createDoc(newDoc)
      .then(response => {
        dispatch(createdocumentSuccess());
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function createdocumentSuccess() {
  return { type: 'CREATE_DOCUMENT_SUCCESS' }
}

export function deleteDocument(deletedDoc) {
  return function (dispatch) {
    return deleteDoc(deletedDoc)
      .then(response => {
        dispatch(deletedocumentSuccess());
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function deletedocumentSuccess() {
  return { type: 'DELETE_DOCUMENT_SUCCESS' }
}

export function updateDocument(updateDocs) {
  return function (dispatch) {
    return updateDoc(updateDocs)
      .then(response => {
        dispatch(updatedocumentSuccess());
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function updatedocumentSuccess() {
  return { type: 'UPDATE_DOCUMENT_SUCCESS' }
}

export function loadDocument(document) {
  return function (dispatch) {
    return allDocument(document)
      .then(documents => {
        dispatch(loaddocumentSuccess(documents));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function loaddocumentSuccess(doc) {
  return { type: 'LOAD_DOCUMENT_SUCCESS', doc };
}

export function loadDoc(doc) {
  return function (dispatch) {
    return allDoc(doc)
      .then(documents => {
        dispatch(loaddocSuccess(documents));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function loaddocSuccess(documents) {
  return { type: 'LOAD_DOC_SUCCESS', documents };
}

export function searchDocument(searchValue) {
  return function (dispatch) {
    return documentSearch(searchValue)
      .then(documents => {
        dispatch(searchdocumentSuccess(documents));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function searchdocumentSuccess(documents) {
  return { type: 'SEARCH_DOCUMENT_SUCCESS', documents }
}

