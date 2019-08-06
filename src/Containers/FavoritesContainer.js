import React, { Component } from 'react'
import FavoritesCard from '../Components/FavoritesCard.js';

class FavoritesContainer extends Component {

  renderFavoritesCards = () => {
    return this.props.listingData.map((listing) => {
      if (listing.favorited === true) {
        return <FavoritesCard key={listing.id} listing={listing} toggleFavorite={this.props.toggleFavorite} handleBooking={this.props.handleBooking}/>
      }
    })
  }


  render() {
    return(
      <div className="favorites sticky">
        <h3>Favorites: </h3>
        {this.renderFavoritesCards()}
      </div>
    )
  }
}

export default FavoritesContainer
