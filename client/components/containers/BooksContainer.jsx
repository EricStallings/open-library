/**
 * ************************************
 *
 * @module  BooksContainer.jsx
 * @author
 * @date 1/14/2020
 * @description BooksContainer Component: Returns Book components.
 *
 * ************************************
 */

import React, { Component } from 'react';
import Redux from 'redux'
import Book from '../Book.jsx';


class BooksContainer extends Component{
  constructor(props){
    super(props)
  }

  render() {
    const bookList = [];
    // fetch('http://openlibrary.org/search.json?q=the+lord+of+the+rings')
    // .then(books => books.json())
    // .then(books => {
    //   books = books.docs;
    //   // books.forEach((book)=>{
    //   //   console.log(book)
    //   //   bookList.push(<Book bookTitle={book.title_suggest} 
    //   //     //bookAuthor={book.author_name[0]}
    //   //      /> )
    //   // })
      // bookList.push(<Book bookTitle={books[0].title_suggest}></Book>)
      // console.log(bookList)
    //} 

    return (
      <div id="books-container">
      {bookList}
      </div>
    );
  }
}

export default BooksContainer;