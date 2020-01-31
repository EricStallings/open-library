import React, { Component } from 'react';
import './styles.css';
import HeaderContainer from './HeaderContainer.jsx'
import BooksContainer from './BooksContainer.jsx'

// Main application.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue : '',
      isSearching : false,
      bookList : [],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this)
  }
  
  // Sets the state's Search Value property.
  onChange(event){
    this.setState({ searchValue: event.target.value });
  };

  // converts the Search Value into a valid URL, submits fetch request to URL.
  handleSubmit(event){
    event.preventDefault();

    let URL = 'http://openlibrary.org/search.json?title='
    const searchValueArray = this.state.searchValue.split(' ');
    for (let i = 0; i < searchValueArray.length; i++){
      URL += searchValueArray[i];
      if (searchValueArray[i+1]) URL += '+'
    }

    fetch(URL)
    .then(response => response.json())
    .then(data => {

      const newBookList = [];
      const books = data.docs;
      books.forEach((book)=>{
        newBookList.push(book)
        // console.log(`Book: `,book)
      })
      this.setState({
        ...this.state,
        bookList: newBookList
      })
    })
    .catch(err=> console.log(`The following error occured: `, err))

  }

  // Renders Header, Form, and BooksContainer components. 
  render() {
    return (
      <div className="App">
        <HeaderContainer/>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" value={this.state.value} onChange={this.onChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        <BooksContainer bookList={this.state.bookList}></BooksContainer>
      </div>
      
    );
  }
}

export default App;
