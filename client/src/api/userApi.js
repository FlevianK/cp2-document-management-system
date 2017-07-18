import axios from 'axios';

//const API_URL = 'https://dms-flev-backend.herokuapp.com/api';
const API_URL = 'http://localhost:8000/api';

export function login(user) {
  return axios.post(`${API_URL}/users/login`, user);
}

export function allUsers() {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/users`,
    { headers: { 'x-access-token': token } }
  );
}

export function createdUser(newUser) {
  const token = localStorage.jwt;
  return axios.post(
    `${API_URL}/users`,
    newUser,
    { headers: { 'x-access-token': token } }
  );
}

export function userUpdate(updatedUser) {
  const token = localStorage.jwt;
  return axios.put(
    `${API_URL}/users/${updatedUser.id}`,
    updatedUser,
    { headers: { 'x-access-token': token } }
  );
}

export function userDelete(deletedUser) {
  const token = localStorage.jwt;
  return axios.delete(
    `${API_URL}/users/${deletedUser.userId}`,
    { headers: { 'x-access-token': token } }
  );
}

export function userSearch(userValue) {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/search/users/?q=${userValue}`,
    { headers: { 'x-access-token': token } }
  );
}

export function userSearchPage(userValue, limit, offset) {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/search/users/?q=${userValue}&limit=${limit}&offset=${offset}`,
    { headers: { 'x-access-token': token } }
  );
}

export function allUser(user) {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/users/${user.userId}`,
    { headers: { 'x-access-token': token } }
  );
}

export function allUsersPage(limit, offset) {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/users/?limit=${limit}&offset=${offset}`,
    { headers: { 'x-access-token': token } }
  );
}
