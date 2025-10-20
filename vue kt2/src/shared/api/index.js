import { getToken } from '../lib/session.js';

const API_BASE = 'https://dummyjson.com';

const getAuthHeaders = () => {
  const token = getToken();
  return token ? { 'Authorization': `Bearer ${token}` } : {};
};

const handleResponse = async (res) => {
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || `HTTP error! status: ${res.status}`);
  }
  return data;
};

export const api = {
  login: (username, password) => {
    return fetch(`${API_BASE}/user/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    }).then(handleResponse);
  },

  getUsers: () => {
    return fetch(`${API_BASE}/users`).then(handleResponse);
  },

  getSelfProfile: () => {
    return fetch(`${API_BASE}/user/me`, {
      method: 'GET',
      headers: getAuthHeaders(),
    }).then(handleResponse);
  },
};