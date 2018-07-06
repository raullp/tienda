import { LOGIN_SUCCESS, LOGOUT } from 'constants';

export default (state={}, { type, payload }) => {
  switch(type) {
    case LOGIN_SUCCESS: {
      const { user } = payload;
      return {
        ...state,
        user,
      }
    }
    case LOGOUT: {
      return {
        ...state,
        user: null,
      };
    }
    default:
      return state;
  }
}