import { allDocuments, createDoc, deleteDoc, updateDoc } from '../api/documentApi';
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
