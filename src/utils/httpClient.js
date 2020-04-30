import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

instance.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error.response.data),
);

export default instance;
