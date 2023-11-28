import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true,
});

export const api = {
    login: (username, password) => axiosInstance.post('/login', { username, password }),
    fetchData: () => axiosInstance.get('/items/id'),
    // Add more API methods as needed
};