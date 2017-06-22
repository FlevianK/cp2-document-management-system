import axios from 'axios';

const API_URL = 'http://localhost:8000/api'

export function allDocuments() {
  let token = localStorage.jwt;
  return axios.get(
    `${API_URL}/documents`,
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
