import axios from 'axios';
const API_URL='http://localhost:8000/api/users'

export function login(user) {
  return axios.post(`${API_URL}/login`, user )
}

