import { LOGIN, AUTH_REQUEST_FAILED } from '../store/actionTypes';

const defaultState = {};
const login = (state=defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      console.log('LOGIN');
      return state;
    case AUTH_REQUEST_FAILED:
      console.log('Auth Failed');
      console.log(action.error);
      return state;
    default:
      return state;
  }
};

export default login;
