/**
 * ************************************
 *
 * @module  Book
 * @author
 * @date
 * @description presentation component that renders a single box for each book.
 *
 * ************************************
 */

import React from 'react';


const Book = props => (

  <div id="book">

    <label htmlFor ='bookTitle'>Title:</label>
    <span id="bookTitle">{props.bookTitle}</span>

    <img src={props.imageURL} />
    
    <p>
    <label htmlFor="bookAuthor">Author: </label>
    <span id="bookAuthor">{props.bookAuthor}</span>
    </p>

  </div>

)
  

export default Book;