import { LOGIN_MODAL_SWITCH } from './types';

export function loginModalSwitch(boal) {
  return {
    type: LOGIN_MODAL_SWITCH,
    payload: boal,
  };
}
