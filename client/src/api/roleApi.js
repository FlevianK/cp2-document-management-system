import axios from 'axios';

const API_URL='http://localhost:8000/api'

export function allRoles() {
  let token = localStorage.jwt;
  return axios.get(
    `${API_URL}/roles`,
    { headers: { 'x-access-token': token } }
  );
}

export function roleCreate(newRole) {
  let token = localStorage.jwt;
  return axios.post(
    `${API_URL}/roles`,
    newRole,
    { headers: { 'x-access-token': token } }
  );
}

export function roleDelete(deletedRole) {
  let token = localStorage.jwt;
  return axios.delete(
    `${API_URL}/roles/${deletedRole.role}`,
    { headers: { 'x-access-token': token } }
  );
}