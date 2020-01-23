import React from 'react';

const Book = (props) => {
  return(
    <li className = "book-li">
      <div className = "book-container">
        <p className="book-title">{props.title}</p>
        <p className ="book-subtitle">{props.subtitle}</p>
      </div>
    </li>
  )
}

export default Book;