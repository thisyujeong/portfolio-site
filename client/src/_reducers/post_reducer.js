import { POST_LIST, POST_NOTE, POST_INFO } from '../_actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
  switch (action.type) {
    case POST_NOTE:
      return { ...state, postData: action.payload };

    case POST_LIST:
      return { ...state, postsData: action.payload };

    case POST_INFO:
      return { ...state, postInfo: action.payload };

    default:
      return state;
  }
}
