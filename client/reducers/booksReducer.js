/**
 * ************************************
 *
 * @module  booksReducer
 * @author
 * @date
 * @description reducer for Books data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  currentSearchBar : '',
  booksList : [],
  isFetching: false
};

const booksReducer = (state = initialState, action) => {

  switch (action.type) {
    // update the searchbar
    case types.UPDATE_SS:
      return {
        ...state,
        currentSearchBar: action.payload,
      };

    case types.IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }

    case types.UPDATE_BL:
      return {
        ...state,
        booksList: action.payload,
      }  
  
    default:
      return state;
  }
};

export default booksReducer;