import axios from 'axios';

// const API_URL = 'https://dms-flev-backend.herokuapp.com/api' || 'http://localhost:8000/api'; // comment this code when running this app locally
const API_URL = 'http://localhost:3000/api'; // comment this code if pushing this file to git

export const allDocuments = () => {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/documents`,
    { headers: { 'x-access-token': token } }
  );
};

export const allDocumentsPage = (limit, offset) => {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/documents/?limit=${limit}&offset=${offset}`,
    { headers: { 'x-access-token': token } }
  );
};

export const createDoc = (newDoc) => {
  const token = localStorage.jwt;
  return axios.post(
    `${API_URL}/documents`,
    newDoc,
    { headers: { 'x-access-token': token } }
  );
};

export const updateDoc = (updateDocs) => {
  const token = localStorage.jwt;
  return axios.put(
    `${API_URL}/documents/${updateDocs.id}`,
    updateDocs,
    { headers: { 'x-access-token': token } }
  );
};

export const deleteDoc = (deletedDoc) => {
  const token = localStorage.jwt;
  return axios.delete(
    `${API_URL}/documents/${deletedDoc.documentId}`,
    { headers: { 'x-access-token': token } }
  );
};

export const singleDocument = (document) => {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/documents/${document.documentId}`,
    { headers: { 'x-access-token': token } }
  );
};

export const allDoc = () => {
  const token = localStorage.jwt;
  const doc = localStorage.userId;
  return axios.get(
    `${API_URL}/users/${doc}/documents`,
    { headers: { 'x-access-token': token } }
  );
};

export const allDocList = (limit, offset) => {
  const token = localStorage.jwt;
  const doc = localStorage.userId;
  return axios.get(
    `${API_URL}/users/${doc}/documents/?limit=${limit}&offset=${offset}`,
    { headers: { 'x-access-token': token } }
  );
};

export const documentSearch = (documentValue) => {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/search/documents/?q=${documentValue}`,
    { headers: { 'x-access-token': token } }
  );
};

export const documentSearchPage = (documentValue, limit, offset) => {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/search/documents/?q=${documentValue}&limit=${limit}&offset=${offset}`,
    { headers: { 'x-access-token': token } }
  );
};

export const allRoleDocument = () => {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/roles/documents`,
    { headers: { 'x-access-token': token } }
  );
};

export const allRoleDocumentPage = (limit, offset) => {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/roles/documents/?limit=${limit}&offset=${offset}`,
    { headers: { 'x-access-token': token } }
  );
};
