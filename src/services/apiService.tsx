import axios from 'axios';

import { API_URL } from '../utils/constant';

const instance = axios.create({
  baseURL: API_URL,
});

const refreshToken = () => {
  axios.get(`${API_URL}/auth/refreshToken`, {
    params: {
      token: localStorage.getItem('token')
    }
  })
    .then(({ data: { token }}) => {
      localStorage.setItem('token', token);
      localStorage.setItem('accessToken', `Bearer ${token}`);
    })
}

instance.interceptors.response.use(response => response, error => {
  const status = error.response ? error.response.status : null

  if (status === 401) {
      return () => {
          refreshToken();
          error.config.headers['Authorization'] = localStorage.getItem('token');
          error.config.baseURL = undefined;
          return instance.request(error.config);
      };
  } 
  return Promise.reject(error);
}); 

export default instance;
