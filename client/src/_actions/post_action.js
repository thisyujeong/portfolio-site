import axios from 'axios';
import { POST_NOTE, POST_LIST, POST_INFO, POST_EDIT } from './types';

export function postNote(dataToSubmit) {
  const request = axios
    .post('/api/posts/note', dataToSubmit)
    .then((response) => response.data);
  return {
    type: POST_NOTE,
    payload: request,
  };
}

export function postEdit(id, dataToSubmit) {
  const request = axios
    .post(`/api/posts/edit/${id}`, dataToSubmit)
    .then((response) => response.data);
  return {
    type: POST_EDIT,
    payload: request,
  };
}

export function postList() {
  const request = axios
    .get('/api/posts') //
    .then((response) => response.data);
  return {
    type: POST_LIST,
    payload: request,
  };
}

export function postInfo(id) {
  const request = axios
    .get(`/api/posts/info/${id}`) //
    .then((response) => response.data);
  return {
    type: POST_INFO,
    payload: request,
  };
}
