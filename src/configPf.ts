import axios from 'axios'

export const baseURL = 'http://localhost:1337/admin/'

export const api = axios.create({
  baseURL: `${baseURL}/api/`,
  timeout: 1000,
});