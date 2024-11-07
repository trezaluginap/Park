// src/api/apiClient.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: '', //Masukkan API Kalian Dak
});

export default apiClient;
