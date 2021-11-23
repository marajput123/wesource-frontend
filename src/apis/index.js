import axios from 'axios'


export const wesourceBackend = axios.create({

    baseURL:"http://3.128.198.193:8080/api/"
});