import React, { Component } from 'react'
import ListingCard from '../Components/ListingCard.js';

class ListingsContainer extends Component {

  renderListingCards = () => {
    // const searchResults = this.props.listingData.filter(listing => {
    //   listing.max_guests >= this.props.searchObj.guests &&
    // })
    return this.props.listingData.map((listing) => {

      return <ListingCard key={listing.id} listing={listing} toggleFavorite={this.props.toggleFavorite} handleBooking={this.props.handleBooking}/>
    })
  }

  render() {
    return(
        <div class="listings">
          {this.renderListingCards()}
        </div>
    )
  }
}

export default ListingsContainer
