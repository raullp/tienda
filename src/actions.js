import { LOGIN_SUCCESS, LOGOUT } from './constants';

export const loginSuccess = user => dispatch => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: { user },
  });
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
