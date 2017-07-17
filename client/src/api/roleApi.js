import axios from 'axios';

const API_URL = 'https://dms-flev-backend.herokuapp.com/api';

export function allRoles() {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/roles/`,
    { headers: { 'x-access-token': token } }
  );
}

export function allRolesPage(limit, offset) {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/roles/?limit=${limit}&offset=${offset}`,
    { headers: { 'x-access-token': token } }
  );
}

export function roleCreate(newRole) {
  const token = localStorage.jwt;
  return axios.post(
    `${API_URL}/roles`,
    newRole,
    { headers: { 'x-access-token': token } }
  );
}

export function roleDelete(deletedRole) {
  const token = localStorage.jwt;
  return axios.delete(
    `${API_URL}/roles/${deletedRole.role}`,
    { headers: { 'x-access-token': token } }
  );
}

export function roleSearch(roleValue) {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/search/roles/?q=${roleValue}`,
    { headers: { 'x-access-token': token } }
  );
}

export function roleSearchPage(roleValue, limit, offset) {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/search/roles/?q=${roleValue}&limit=${limit}&offset=${offset}`,
    { headers: { 'x-access-token': token } }
  );
}
