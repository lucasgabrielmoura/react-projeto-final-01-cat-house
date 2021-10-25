import axios from 'axios';


const api = axios.create({
    baseURL:"https://api.thecatapi.com/v1/images/search"
})

export default api