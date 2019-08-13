import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:xxxx'
})

export default api;