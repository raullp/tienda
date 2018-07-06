import { LOGIN_SUCCESS, LOGOUT } from 'constants';

export default function (state = {}, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      const { user } = action.payload;
      return {
        ...state,
        user,
      };
    }
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}