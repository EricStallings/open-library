/**
 * ************************************
 *
 * @module  SearchBar
 * @author
 * @date
 * @description presentation component that takes user input for new book search
 *
 * ************************************
 */

import React, { Component } from 'react';

class SearchBar extends Component { 
  constructor(props){
    super(props)
    this.state = {
      fetchTimeout: null
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  
  handleOnChange(event){
    clearTimeout(this.state.fetchTimeout);
    this.props.updateSS(event.target.value);

    const fetchTimeout = setTimeout(()=>{
      console.log(`FETCHING...`)
      this.props.fetchWithSS(this.props.currentSearchBar)
    }, 500)

    this.setState({
      fetchTimeout : fetchTimeout
    })
    
  }

  render(){
    return(
  <form id="search-bar" onChange={this.handleOnChange} value={this.props.currentSearchBar}>
    <h4>Search For Book By Title</h4>
    {/* <label htmlFor='searchBar'></label> */}
    <input id='searchBarBook' type='text' name='searchBar' />
    {/* <input type='submit' value='Search Title' /> */}
  </form>)

  }
};

export default SearchBar;
