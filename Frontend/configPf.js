import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:1337//api/',
    timeout: 1000,
});