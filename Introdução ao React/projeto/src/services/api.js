import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.polijunior.com.br/produtos'
});

export default api;