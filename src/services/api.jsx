import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Content-type': 'application/json'
    },
    params: {
        api_key: apiKey,
        language: 'pt-BR'
    }
});

export default api