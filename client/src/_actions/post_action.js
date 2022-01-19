import axios from 'axios';
import { POST } from './types';

// let id = 0;
export function post(dataToSubmit) {
  // dataToSubmit.id = id++;
  const request = axios
    .post('/api/posts/note', dataToSubmit)
    .then((response) => response.data);
  return {
    type: POST,
    payload: request,
  };
}
