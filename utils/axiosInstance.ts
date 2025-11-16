// axiosInstance.js
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import APP_STORAGE from '~constants/appStorage';

import { appStorage } from './publicStorage';

// Add auth token to the request
export const authInterceptor = (config: InternalAxiosRequestConfig) => {
  const token = appStorage.getString(APP_STORAGE.ACCESS_TOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

// Log the request
export const loggingInterceptor = (config: InternalAxiosRequestConfig) => {
  console.log('Request:', config);
  return config;
};

// Handle unauthorized response
export const errorInterceptor = (error: AxiosError) => {
  if (error.response && error.response.status === 401) {
    console.error('Unauthorized, redirecting to login...');
    // Redirect to login or handle unauthorized error
  }
  return Promise.reject(error);
};

// Log the response
export const responseLoggingInterceptor = (response: AxiosResponse) => {
  console.log('Response:', response);
  return response;
};

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Apply request interceptors
axiosInstance.interceptors.request.use(authInterceptor);
axiosInstance.interceptors.request.use(loggingInterceptor);

// Apply response interceptors
axiosInstance.interceptors.response.use(responseLoggingInterceptor, errorInterceptor);

export default axiosInstance;
