import axios from 'axios';

const API_URL = 'http://localhost:8080'

export function createClass(className) {
    return axios.post(`${API_URL}/class`, {
        name: className,
        timers: []
    });
}

export function getClass(id) {
    return axios.get(`${API_URL}/class/${id}`);
}