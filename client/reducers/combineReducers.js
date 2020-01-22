/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description a file that combines all reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';

// import all reducers here
import booksReducer from './booksReducer';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  books: booksReducer,
});

// make the combined reducers available for import
export default reducers;
