import axios from 'axios';
import { getSession } from 'next-auth/react';

// Base URL for your FastAPI backend
const BASE_URL = 'http://127.0.0.1:8000/api/v1';

// Axios instance without authorization
export const axiosPublic = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Axios instance with authorization
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to the private instance to add the session token
axiosPrivate.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    if (session?.accessToken) {
      config.headers['Authorization'] = `Bearer ${session.accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Optionally, add response interceptors to handle token expiration, etc.
axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    // Handle token refresh or redirect to login if needed
    return Promise.reject(error);
  }
);