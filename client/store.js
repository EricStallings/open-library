/**
 * ************************************
 *
 * @module  store.js
 * @author
 * @date
 * @description Algo-Books Store
 *
 * ************************************
 */

//bring in REDUX THUNK and add it to the STORE

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/combineReducers';
import thunk from 'redux-thunk';

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = createStore(
  reducers,
  applyMiddleware(thunk),
  composeWithDevTools()
);

export default store;