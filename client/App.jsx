
/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date 1/14/2020
 * @description Main APP component
 *
 * ************************************
 */

import React, { Component } from 'react';
import MainContainer from './components/containers/MainContainer.jsx';

import './styles.css';
// import Redux from 'redux'
// import ReactDom from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MainContainer />
      </div>
    );
  }
}

export default App;
