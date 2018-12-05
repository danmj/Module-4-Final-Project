import React, { Component } from 'react';
import './stylesheets/App.css';
import Nav from './Components/Nav.js';
import Search from './Components/Search.js';
import PageBody from './Containers/PageBody.js';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div id="window">
          <div className="App">
            <Nav />
            <PageBody />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
