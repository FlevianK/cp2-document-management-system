import axios from 'axios';

const API_URL = 'http://localhost:8000/api'

export function allDocuments() {
  let token = localStorage.jwt;
  return axios.get(
    `${API_URL}/documents`,
    { headers: { 'x-access-token': token } }
  );
}

export function allDocumentsPage(limit=4, offset=0) {
  let token = localStorage.jwt;
  return axios.get(
    `${API_URL}/documents/?limit=${limit}&offset=${offset}`,
    { headers: { 'x-access-token': token } }
  );
}

export function createDoc(newDoc) {
  let token = localStorage.jwt;
  return axios.post(
    `${API_URL}/documents`,
    newDoc,
    { headers: { 'x-access-token': token } }
  );
}

export function updateDoc(updateDocs) {
  let token = localStorage.jwt;
  return axios.put(
    `${API_URL}/documents/${updateDocs.documentId}`,
    updateDocs,
    { headers: { 'x-access-token': token } }
  );
}

export function deleteDoc(deletedDoc) {
  let token = localStorage.jwt;
  return axios.delete(
    `${API_URL}/documents/${deletedDoc.documentId}`,
    { headers: { 'x-access-token': token } }
  );
}

export function allDocument(document) {
  let token = localStorage.jwt;
  return axios.get(
    `${API_URL}/documents/${document.documentId}`,
    { headers: { 'x-access-token': token } }
  );
}

export function allDoc(doc) {
  let token = localStorage.jwt;
  return axios.get(
    `${API_URL}/users/${doc}/documents`,
    { headers: { 'x-access-token': token } }
  );
}

export function documentSearch(documentValue) {
  let token = localStorage.jwt;
  return axios.get(
    `${API_URL}/search/documents/?q=${documentValue}`,
    { headers: { 'x-access-token': token } }
  );
}

export function allRoleDocument() {
  let token = localStorage.jwt;
  return axios.get(
    `${API_URL}/roles/documents`,
    { headers: { 'x-access-token': token } }
  );
}
export function allRoleDocumentPage(limit=4, offset=0) {
  let token = localStorage.jwt;
  return axios.get(
    `${API_URL}/roles/documents/?limit=${limit}&offset=${offset}`,
    { headers: { 'x-access-token': token } }
  );
}
