import axios from 'axios';

const API_URL = 'http://localhost:8000/api'

export function login(user) {
  return axios.post(`${API_URL}/users/login`, user)
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

export function userSearch(userValue) {
  let token = localStorage.jwt;
  return axios.get(
    `${API_URL}/search/users/?q=${userValue}`,
    { headers: { 'x-access-token': token } }
  );
}

export function allUser(user) {
  let token = localStorage.jwt;
  return axios.get(
    `${API_URL}/users/${user.userId}`,
    { headers: { 'x-access-token': token } }
  );
}

export function allUsersPage(limit=4, offset=1) {
  let token = localStorage.jwt;
  return axios.get(
    `${API_URL}/users/?limit=${limit}&offset=${offset}`,
    { headers: { 'x-access-token': token } }
  );
}
