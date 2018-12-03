import React, { Component } from 'react'
import Filters from '../Components/Filters.js';
import ListingsContainer from './ListingsContainer.js';
import FavoritesContainer from './FavoritesContainer.js';

class ResultsContainer extends Component {

  render() {
    return(
      <div>

          <Filters />
          <ListingsContainer listingData={this.props.listingData} guestsData={this.props.guestsData} citiesData={this.props.citiesData}  searchObj={this.props.searchObj} toggleFavorite={this.props.toggleFavorite} handleBooking={this.props.handleBooking} />

          <FavoritesContainer listingData={this.props.listingData} toggleFavorite={this.props.toggleFavorite} handleBooking={this.props.handleBooking} />


      </div>
    )
  }
}

export default ResultsContainer
