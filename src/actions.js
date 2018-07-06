import { LOGIN_SUCCESS, LOGOUT, ADD_TO_CART } from './constants';

export const loginSuccess = user => ({
    type: LOGIN_SUCCESS,
    payload: { user },
});

export const logout = () => ({
  type: LOGOUT,
});

export const addToCart = (id, amount) => ({
  type: ADD_TO_CART,
  payload: { id, amount },
});
