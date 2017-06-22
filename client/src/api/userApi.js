import axios from 'axios';

const API_URL='http://localhost:8000/api'

export function login(user) {
  return axios.post(`${API_URL}/users/login`, user )
}

export function allUsers() {
  let token = localStorage.jwt;
  return axios.get(
    `${API_URL}/users`,
    { headers: { 'x-access-token': token } }
  );
}

export function createdUser(newUser) {
  let token = localStorage.jwt;
  return axios.post(
    `${API_URL}/users`,
    newUser,
    { headers: { 'x-access-token': token } }
  );
}

export function userUpdate(updatedUser) {
  let token = localStorage.jwt;
  return axios.put(
    `${API_URL}/users/${updatedUser.userId}`,
    updatedUser,
    { headers: { 'x-access-token': token } }
  );
}

export function userDelete(deletedUser) {
  let token = localStorage.jwt;
  return axios.delete(
    `${API_URL}/users/${deletedUser.userId}`,
    { headers: { 'x-access-token': token } }
  );
}

export function userSearch() {
  let token = localStorage.jwt;
  return axios.get(
    `${API_URL}/search/users/?q=${userValue}`,
    { headers: { 'x-access-token': token } }
  );
}
