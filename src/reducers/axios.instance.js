import axios from 'axios';
import dataConfig from '../config/dataConfig';

export const axiosNoAuth = axios.create({
  baseURL: dataConfig.baseUrl,
  timeout: 1000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
});

const axiosAuth = () => {
  const token = sessionStorage.getItem('token');
  return axios.create({
    baseURL: dataConfig.baseUrl,
    timeout: 1000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export default axiosAuth;
