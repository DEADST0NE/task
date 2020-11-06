import axios from 'axios';

import { API_URL } from '../utils/constant';

const instance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.response.use((response) => {
  console.log('interceptors.response', response);
  return response;
}, (error) => {
  console.log('interceptors.error', error)
  return Promise.reject(error);
});
