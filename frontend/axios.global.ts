import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.1.35:5000/api/',
});

 