import axios from 'axios';
import { POST_NOTE, POST_LIST, POST_IMAGE_UPLOAD } from './types';

export function postNote(dataToSubmit) {
  const request = axios
    .post('/api/posts/note', dataToSubmit)
    .then((response) => response.data);
  return {
    type: POST_NOTE,
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

// export function postImgUpload(formData) {
//   const request = axios
//     .post('/api/posts/upload', formData) //
//     .then((response) => response.data);
//   return {
//     type: POST_IMAGE_UPLOAD,
//     payload: request,
//   };
// }
