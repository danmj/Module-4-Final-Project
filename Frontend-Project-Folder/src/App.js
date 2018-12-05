import React, { Component } from 'react';
import './stylesheets/App.css';
import Nav from './Components/Nav.js';
import PageBody from './Containers/PageBody.js';



class App extends Component {

  state = {
    logoClick: '',
    searchClick: '',
    accountClick: ''
  }

  logoHandler = () => {
    this.setState({ logoClick: "results" })
  }

  searchHandler = () => {
    this.setState({ searchClick: "search" })
  }

  accountHandler = () => {
    this.setState({ accountClick: "" })
  }

  render() {
    return (
      <div id="window">
        <div className="App">
          <Nav logoHandler={this.logoHandler} searchHandler={this.searchHandler} accountHandler={this.accountHandler} />
          <PageBody logoClick={this.state.logoClick} searchClick={this.state.searchClick}/>
        </div>
      </div>
    );
  }
}

export default App;
