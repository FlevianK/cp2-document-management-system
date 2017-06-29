import { allDocuments, createDoc, deleteDoc, allRoleDocumentPage, allDocumentsPage, updateDoc, allDocument, allRoleDocument, allDoc, documentSearch } from '../api/documentApi';
import * as types from '../constants/appConstants';

export function loadDocuments() {
  return function (dispatch) {
    return allDocuments()
      .then(res => {
        dispatch(loadDocumentsSuccess(res.data));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function loadDocumentsSuccess(documents) {
  return { type: 'LOAD_DOCUMENTS_SUCCESS', documents };
}

export function loadDocumentsPage(limit, offset) {
  return function (dispatch) {
    return allDocumentsPage(limit, offset)
      .then(res => {
        dispatch(loadDocumentsPageSuccess(res.data));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function loadDocumentsPageSuccess(documentsPage) {
  return { type: 'LOAD_DOCUMENTS_PAGE_SUCCESS', documentsPage };
}

export function loadRoleDocuments() {
  return function (dispatch) {
    return allRoleDocument()
      .then(res => {
        dispatch(loadRoleDocumentsSuccess(res.data));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function loadRoleDocumentsSuccess(documents) {
  return { type: 'LOAD_ROLE_DOCUMENTS_SUCCESS', documents };
}

export function loadRoleDocumentsPage(limit, offset) {
  return function (dispatch) {
    return allRoleDocumentPage(limit, offset)
      .then(res => {
        dispatch(loadRoleDocumentsPageSuccess(res.data));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function loadRoleDocumentsPageSuccess(documentsPage) {
  return { type: 'LOAD_ROLE_DOCUMENTS_PAGE_SUCCESS', documentsPage };
}

export function createDocument(newDoc) {
  return function (dispatch) {
    return createDoc(newDoc)
      .then(res => {
        dispatch(createdocumentSuccess(res.data));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function createdocumentSuccess(documents) {
  return { type: 'CREATE_DOCUMENT_SUCCESS', documents }
}

export function deleteDocument(deletedDoc) {
  return function (dispatch) {
    return deleteDoc(deletedDoc)
      .then(res => {
        dispatch(deletedocumentSuccess(res.data));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function deletedocumentSuccess(documents) {
  return { type: 'DELETE_DOCUMENT_SUCCESS', documents }
}

export function updateDocument(updateDocs) {
  return function (dispatch) {
    return updateDoc(updateDocs)
      .then(res => {
        dispatch(updatedocumentSuccess(res.data));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function updatedocumentSuccess(documents) {
  return { type: 'UPDATE_DOCUMENT_SUCCESS', documents }
}

export function loadDocument(document) {
  return function (dispatch) {
    return allDocument(document)
      .then(res => {
        dispatch(loaddocumentSuccess(res.data));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function loaddocumentSuccess(documents) {
  return { type: 'LOAD_DOCUMENT_SUCCESS', documents };
}

export function loadDoc(doc) {
  return function (dispatch) {
    return allDoc(doc)
      .then(res => {
        dispatch(loaddocSuccess(res.data));
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
      .then(res => {
        dispatch(searchdocumentSuccess(res.data));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function searchdocumentSuccess(documents) {
  return { type: 'SEARCH_DOCUMENT_SUCCESS', documents }
}

