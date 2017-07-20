import axios from 'axios';

const API_URL = 'https://dms-flev-backend.herokuapp.com/api'; // comment this code when running this app locally
// const API_URL = 'http://localhost:8000/api'; // comment this code if pushing this file to git

export const login = (user) => {
  return axios.post(`${API_URL}/users/login`, user);
};

export const allUsers = () => {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/users`,
    { headers: { 'x-access-token': token } }
  );
};

export const createdUser = (newUser) => {
  const token = localStorage.jwt;
  return axios.post(
    `${API_URL}/users`,
    newUser,
    { headers: { 'x-access-token': token } }
  );
};

export const userUpdate = (updatedUser) => {
  const token = localStorage.jwt;
  return axios.put(
    `${API_URL}/users/${updatedUser.id}`,
    updatedUser,
    { headers: { 'x-access-token': token } }
  );
};

export const userDelete = (deletedUser) => {
  const token = localStorage.jwt;
  return axios.delete(
    `${API_URL}/users/${deletedUser.userId}`,
    { headers: { 'x-access-token': token } }
  );
};

export const userSearch = (userValue) => {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/search/users/?q=${userValue}`,
    { headers: { 'x-access-token': token } }
  );
};

export const userSearchPage = (userValue, limit, offset) => {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/search/users/?q=${userValue}&limit=${limit}&offset=${offset}`,
    { headers: { 'x-access-token': token } }
  );
};

export const allUser = (user) => {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/users/${user.userId}`,
    { headers: { 'x-access-token': token } }
  );
};

export const allUsersPage = (limit, offset) => {
  const token = localStorage.jwt;
  return axios.get(
    `${API_URL}/users/?limit=${limit}&offset=${offset}`,
    { headers: { 'x-access-token': token } }
  );
}
