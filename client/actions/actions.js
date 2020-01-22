/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes';

// add more action creators
export const updateSS = text => ({
  type: types.UPDATE_SS,
  payload: text
});

export const updateBL = array => ({
  type: types.UPDATE_BL,
  payload: array
})

export const isFetching = bool => ({
  type: types.IS_FETCHING,
  payload: bool
})

// export const fetchWithSS = text => {
//   return dispatch => {

//   dispatch(isFetching(true));

//   let URL = 'http://openlibrary.org/search.json?title='
//   let textArray = text.split(' ');
//   for (let i = 0; i < textArray.length; i++){
//     URL+= `${textArray[i]}`
//     if (array[i+1]) URL+= '+'
//   }
//   console.log('URL IS: ', URL)
//   fetch(URL)
//   .then(resp => resp.json())
//   .then(data => {
//     // dispatch updateBL(data or some version of the data. We expect an array.)
//     dispatch(updateBL(data.docs))
//   })
//   .then (dispatch(isFetching(false)))
//   .catch(err => {
//     console.log(`Error: `, err )
//   })

//   };
// }


// build a const "fetchWithSearchString"
// this willbe where we construct the url as well
  // call dispatch (invoke update SS passing in text () )
//fetch the constructed url 

//From Stack Overflow : 
/*
export function fetchOffers() {
  return function action(dispatch) {
    dispatch({ type: FETCH_OFFERS })

    const request = axios({
      method: 'GET',
      url: `${BASE_URL}/offers`,      << this will be our URL
      headers: []
    });
    
    return request.then(
      response => dispatch(fetchOffersSuccess(response)),
      err => dispatch(fetchOffersError(err))
    );
  }
}
*/