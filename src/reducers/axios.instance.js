import axios from 'axios';
import dataConfig from '../config/dataConfig';

export default axios.create({
  baseURL: dataConfig.baseUrl,
  timeout: 1000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
});
