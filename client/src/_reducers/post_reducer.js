import { POST } from '../_actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
  switch (action.type) {
    case POST:
      return { ...state, postData: action.payload };

    default:
      return state;
  }
}
