import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/${BASE_URL}`
})

export default api
