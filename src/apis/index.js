import axios from 'axios'

export const wesourceBackend = axios.create({
    baseURL:"https://3.128.198.193:8080/api/"
    /// Development
    // baseURL: "http://127.0.0.1:5000/api/"
});