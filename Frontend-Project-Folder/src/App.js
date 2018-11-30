import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav.js';
import PageBody from './Containers/PageBody.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <PageBody />
      </div>
    );
  }
}

export default App;
