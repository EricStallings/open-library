/**
 * ************************************
 *
 * @module  MainContainer.jsx
 * @author
 * @date 1/14/2020
 * @description MainContainer Component: Returns SearchBar & Book components.
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import BooksContainer from './BooksContainer.jsx';
import SearchBar from '../SearchBar.jsx'
import * as actions from '../../actions/actions';

const mapStateToProps = store => ({
  // provide pertinent state here
  currentSearchBar : store.books.currentSearchBar,
  bookList : store.books.bookList,
  isFetching: store.books.isFetching,

});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  updateSS : text => {
    // event.preventDefault();
    // event.persist();
    // console.log(`Line 28, Event is: `, event )
    dispatch(actions.updateSS(text))

  },
  updateBL : array => {
    dispatch(actions.updateBL(array))
  },

  fetchWithSS : string => {
    dispatch(actions.fetchWithSS(string))
  }
  // fetchBooks : 

});

class MainContainer extends Component{
  constructor(props){
    super(props)
 

  }

  render() {
    return (
      <div id = "main-container">
        <SearchBar 
      
        currentSearchBar = {this.props.currentSearchBar}
        updateSS = {this.props.updateSS}
        // fetching action would also have to be passed down !!
        fetchWithSS = {this.props.fetchWithSS}
        />
        <BooksContainer currentSearchBar={this.props.currentSearchBar} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);