import React, { Component } from 'react'
import Filters from '../Components/Filters.js';
import ListingsContainer from './ListingsContainer.js';
import FavoritesContainer from './FavoritesContainer.js';

class ResultsContainer extends Component {
  render() {
    return(
      <div>
        <Filters />
        <ListingsContainer listingData={this.props.listingData} guestsData={this.props.guestsData} citiesData={this.props.citiesData}/>
        <FavoritesContainer />

      </div>
    )
  }
}

export default ResultsContainer
