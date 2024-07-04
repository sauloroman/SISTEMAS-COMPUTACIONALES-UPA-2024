import axios from 'axios';

const { VITE_API_URL} = import.meta.env;
const abrasaAPI = axios.create({ baseURL: VITE_API_URL })
export default abrasaAPI