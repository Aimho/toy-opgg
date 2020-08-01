import axios from 'axios';

export const getFruitsApi = () => axios.get(`/data/fruits.json`);
