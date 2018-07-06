import { LOGIN_SUCCESS, LOGOUT } from 'constants';

const defaultState = {
  productos : [
    { id: 2, name: 'Kiwi', price: 3, available: 10, url: './images/kiwi.jpg'},
    { id: 3, name: 'Limon', price: 2, available: 5, url: './images/limon.jpg'},
    { id: 4, name: 'Fresa', price: 3, available: 8, url: './images/fresa.jpg'},
    { id: 5, name: 'Manzana', price: 2, available: 16, url: './images/manzana.jpg'},
    { id: 6, name: 'Maiz', price: 2, available: 16, url: './images/maiz.jpg'},
    { id: 7, name: 'Zanahoria', price: 2, available: 16, url: './images/zanahoria.jpg'},
  ],
  cart: [],
};


export default function (state = defaultState, { type, payload }) {
  switch (type) {
    case 'LOGIN_SUCCESS': {
      const { user } = payload;
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
    case 'ADD_TO_CART': {
      const { cart } = state;
      return {
        ...state,
        cart: [...cart, { ...payload }]
      };
    }
    default:
      return state;
  }
}