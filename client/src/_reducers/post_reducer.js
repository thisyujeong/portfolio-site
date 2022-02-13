import { POST_LIST, POST_NOTE, POST_INFO, POST_EDIT } from '../_actions/types';

const initialState = {
  title: '',
  info: '',
  type: '',
  tech: '',
  git: '',
  site: '',
  due: '',
  role: '',
  member: 0,
  desc: '',
  markdown: '',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case POST_NOTE:
      return { ...state, postData: action.payload };

    case POST_EDIT:
      return { ...state, postData: action.payload };

    case POST_LIST:
      return { ...state, postsData: action.payload };

    case POST_INFO:
      return { ...state, postInfo: action.payload };

    default:
      return state;
  }
}
