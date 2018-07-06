import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middleware = applyMiddleware(thunk);

export default function configureStore(initialState={}) {
  return createStore(rootReducer, initialState, middleware);
}
