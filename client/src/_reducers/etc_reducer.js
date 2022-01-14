import { LOGIN_MODAL_SWITCH } from '../_actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = false, action) {
  switch (action.type) {
    case LOGIN_MODAL_SWITCH:
      return (state = action.payload);
    default:
      return state;
  }
}
