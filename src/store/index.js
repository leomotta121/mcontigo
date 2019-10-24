/* eslint-disable no-console */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducers from './ducks';

const middlewares = [];

const logger = store => next => action => {
  console.log('[Middleware] Dispatching', action);
  const result = next(action);
  console.log('[Middleware] next state', store.getState());
  return result;
};

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

// eslint-disable-next-line no-unused-vars
export function initializeStore(initialState, options) {
  return createStore(
    rootReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
}
