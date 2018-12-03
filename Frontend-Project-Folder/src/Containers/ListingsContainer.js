import React, { Component } from 'react'
import ListingCard from '../Components/ListingCard.js';

class ListingsContainer extends Component {

  renderListingCards = () => {
    const searchResults = this.props.listingData.filter(listing => {
      return listing.max_occupants >= this.props.searchObj.guests && listing.city === this.props.searchObj.city
    })
    return searchResults.map((listing) => {
      return <ListingCard key={listing.id} listing={listing} toggleFavorite={this.props.toggleFavorite} handleBooking={this.props.handleBooking}/>
    })
  }

  render() {
    return(
        <div className="listings">
          {this.renderListingCards()}
        </div>
    )
  }
}

export default ListingsContainer
