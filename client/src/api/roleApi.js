import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

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
