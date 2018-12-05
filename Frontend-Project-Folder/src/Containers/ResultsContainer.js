import React, { Component } from 'react'
import Filters from '../Components/Filters.js';
import ListingsContainer from './ListingsContainer.js';
import FavoritesContainer from './FavoritesContainer.js';

class ResultsContainer extends Component {
  componentDidMount() {
    // document.body.style.backgroundImage = "url()"
    // document.body.style.backgroundColor = "rgb(47, 109, 118, .4)"
  }

  render() {
    return(

      <div id="results-bg" >
          <ListingsContainer listingData={this.props.listingData} guestsData={this.props.guestsData} citiesData={this.props.citiesData} searchObject={this.props.searchObject} toggleFavorite={this.props.toggleFavorite} handleBooking={this.props.handleBooking} />

          <FavoritesContainer listingData={this.props.listingData} toggleFavorite={this.props.toggleFavorite} handleBooking={this.props.handleBooking} />

      </div>
    )
  }
}

export default ResultsContainer
