import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omnistack-backend-pati.herokuapp.com',
});

export default api;
