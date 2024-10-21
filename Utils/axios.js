// utils/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://sunchase.backend.aait-d.com/api', // Replace with your API base URL
});

export default axiosInstance;
