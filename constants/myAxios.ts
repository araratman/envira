import axios from 'axios';

const myaxios = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
});

export default myaxios