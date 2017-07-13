import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export function allDocuments() {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/documents`,
    { headers: { 'x-access-token': token } }
  );
}

export function allDocumentsPage(limit, offset) {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/documents/?limit=${limit}&offset=${offset}`,
    { headers: { 'x-access-token': token } }
  );
}

export function createDoc(newDoc) {
  const token = localStorage.jwt;
  return axios.post(
    `${API_URL}/documents`,
    newDoc,
    { headers: { 'x-access-token': token } }
  );
}

export function updateDoc(updateDocs) {
  const token = localStorage.jwt;
  return axios.put(
    `${API_URL}/documents/${updateDocs.documentId}`,
    updateDocs,
    { headers: { 'x-access-token': token } }
  );
}

export function deleteDoc(deletedDoc) {
  const token = localStorage.jwt;
  return axios.delete(
    `${API_URL}/documents/${deletedDoc.documentId}`,
    { headers: { 'x-access-token': token } }
  );
}

export function singleDocument(document) {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/documents/${document.documentId}`,
    { headers: { 'x-access-token': token } }
  );
}

export function allDoc() {
  const token = localStorage.jwt;
  const doc = localStorage.userId;
  return axios.get(
    `${API_URL}/users/${doc}/documents`,
    { headers: { 'x-access-token': token } }
  );
}

export function allDocList(limit, offset) {
  const token = localStorage.jwt;
  const doc = localStorage.userId;
  return axios.get(
    `${API_URL}/users/${doc}/documents/?limit=${limit}&offset=${offset}`,
    { headers: { 'x-access-token': token } }
  );
}

export function documentSearch(documentValue) {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/search/documents/?q=${documentValue}`,
    { headers: { 'x-access-token': token } }
  );
}

export function documentSearchPage(documentValue, limit, offset) {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/search/documents/?q=${documentValue}&limit=${limit}&offset=${offset}`,
    { headers: { 'x-access-token': token } }
  );
}

export function allRoleDocument() {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/roles/documents`,
    { headers: { 'x-access-token': token } }
  );
}
export function allRoleDocumentPage(limit, offset) {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/roles/documents/?limit=${limit}&offset=${offset}`,
    { headers: { 'x-access-token': token } }
  );
}
