import { allDocuments, createDoc, deleteDoc, allRoleDocumentPage, allDocumentsPage, updateDoc, singleDocument, allRoleDocument, allDoc, documentSearch, documentSearchPage, allDocList } from '../api/documentApi';
import * as types from '../constants/appConstants';
import toastr from 'toastr';

export const loadDocuments =() => { 
  /**
    * loadDocuments method
    * @return all documents
    */
  return (dispatch) => {
    return allDocuments()
      .then((res) => {
        dispatch(loadDocumentsSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

export const loadDocumentsSuccess =(allDocuments) => {
  return { type: 'LOAD_DOCUMENTS_SUCCESS', allDocuments };
};

export const loadDocumentsPage = (limit, offset) => { 
  /**
    * loadDocumentsPage method
    * @params data - limit and offset
    * @return all documents depending on the specified range
    */
  return (dispatch) => {
    return allDocumentsPage(limit, offset)
      .then((res) => {
        dispatch(loadDocumentsPageSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

export const loadDocumentsPageSuccess = (allDocumentsPage) => {
  return { type: 'LOAD_DOCUMENTS_PAGE_SUCCESS', allDocumentsPage };
};

export const loadRoleDocuments = () => {
  /**
    * loadRoleDocuments method
    * @return all role-based documents
    */
  return (dispatch) => {
    return allRoleDocument()
      .then((res) => {
        dispatch(loadRoleDocumentsSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

export const loadRoleDocumentsSuccess = (roleDocuments) => {
  return { type: 'LOAD_ROLE_DOCUMENTS_SUCCESS', roleDocuments };
};

export const loadRoleDocumentsPage = (limit, offset) => {
  /**
    * loadRoleDocumentsPage method
    * @params data - limit and offset
    * @return all role-base documents depending on the specified limits
    */
  return (dispatch) => {
    return allRoleDocumentPage(limit, offset)
      .then((res) => {
        dispatch(loadRoleDocumentsPageSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

export const loadRoleDocumentsPageSuccess = (roleDocumentsPage) => {
  return { type: 'LOAD_ROLE_DOCUMENTS_PAGE_SUCCESS', roleDocumentsPage };
};

export const createDocument = (newDoc) => {
  /**
    * createDocument method
    * @params data - document details
    */
  return (dispatch) => {
    return createDoc(newDoc)
      .then((res) => {
        dispatch(createdocumentSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

export const createdocumentSuccess = (documents) => {
  return { type: 'CREATE_DOCUMENT_SUCCESS', documents };
};

export const deleteDocument = (deletedDoc) => {
  /**
    * deleteDocument method
    * @params data - documents id
    */
  return (dispatch) => {
    return deleteDoc(deletedDoc)
      .then((res) => {
        dispatch(deletedocumentSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

export const deletedocumentSuccess = (documents) => {
  return { type: 'DELETE_DOCUMENT_SUCCESS', documents };
};

export const updateDocument = (updateDocs) => {
  /**
    * updateDocument method
    * @params data - document details
    */
  return (dispatch) => {
    return updateDoc(updateDocs)
      .then((res) => {
        dispatch(updatedocumentSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

export const updatedocumentSuccess = (documents) => {
  return { type: 'UPDATE_DOCUMENT_SUCCESS', documents };
};

export const loadDocument = (document) =>{ 
  /**
    * loadDocument method
    * @params data - document id
    * @return single document
    */
  return (dispatch) => {
    return singleDocument(document)
      .then((res) => {
        dispatch(loaddocumentSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

export const loaddocumentSuccess = (documents) => {
  return { type: 'LOAD_DOCUMENT_SUCCESS', documents };
};

export const loadDoc = () => {
  /**
    * loadDoc method
    * @return all documents that belongs to the logged in user
    */
  return (dispatch) => {
    return allDoc()
      .then((res) => {
        dispatch(loaddocSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

export const loaddocSuccess = (documents) => {
  return { type: 'LOAD_DOC_SUCCESS', documents };
};

export const loadDocList = (limit, offset) =>{ 
  /**
    * loadDocList method
    * @params data - limit and offset
    * @return all documents that belongs to the logged in user depending on the specified range
    */
  return (dispatch) => {
    return allDocList(limit, offset)
      .then((res) => {
        dispatch(loaddoclistSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

export const loaddoclistSuccess = (documentsPage) => {
  return { type: 'LOAD_DOC_PAGE_SUCCESS', documentsPage };
};

export const searchDocuments = (searchValue) => {
  /**
    * searchDocuments method
    * @params data - search value
    * @return all documents depending on the search value
    */
  return (dispatch) => {
    return documentSearch(searchValue)
      .then((res) => {
        dispatch(searchdocumentSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

export const searchdocumentSuccess = (documentsSearch) =>{
  return { type: 'SEARCH_DOCUMENT_SUCCESS', documentsSearch };
};

export const searchDocumentsPage = (searchValue, limit, offset) => {
  /**
    * searchDocumentsPage method
    * @params data - search value, limit and offset
    * @return all documents depending on the search value and specified range
    */
  return (dispatch) => {
    return documentSearchPage(searchValue, limit, offset)
      .then((res) => {
        dispatch(searchdocumentpagesuccess(res.data));
      })
      .catch((error) => {
        toastr.error(error.response.data.message);
      });
  };
};

export const searchdocumentpagesuccess = (documentsSearchPage) => {
  return { type: 'SEARCH_DOCUMENT_PAGE_SUCCESS', documentsSearchPage };
};
