import axios from 'axios';
import { authHeader } from '../_helpers';

export default() => {
  return axios.create({
    baseURL: `http://localhost:65453/GHS-TEST3/Demo/api`,
    headers: authHeader(),
  });
};