import React from 'react';
import Book from './Book.jsx'

const BooksContainer = (props) => {
  const bookList = [];

  props.bookList.forEach((book)=>{
    console.log(book.isbn)
    bookList.push(<Book title={book.title} subtitle={book.subtitle}/>);
  })

  return(
    <ul className="book-list">
    {bookList}
    </ul>
  )
}

export default BooksContainer;