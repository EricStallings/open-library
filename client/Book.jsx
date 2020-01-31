import React from 'react';

const Book = (props) => {

  return(
    <li className = "book-li">
      <div className = "book-container">
      {/* <img className= "book-image" src={`http://covers.openlibrary.org/b/isbn/${props.bookCoverID}-M.jpg`} />  */}
        <p className="book-title">{props.title}</p>
        <p className ="book-subtitle">{props.subtitle}</p>
      </div>
    </li>
  )
}

export default Book;