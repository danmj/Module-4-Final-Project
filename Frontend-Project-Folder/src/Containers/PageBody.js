import React, { Component } from 'react'
import Search from '../Components/Search.js';
import ResultsContainer from './ResultsContainer.js';
import BookingContainer from './BookingContainer.js';

class PageBody extends Component {
  render() {
    return(
      <div>
        PageBody bar here
        <Search />
        <ResultsContainer />
        <BookingContainer />
      </div>
    )
  }
}

export default PageBody
