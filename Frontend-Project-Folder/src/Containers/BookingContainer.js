import React, { Component } from 'react'
import ListingCard from '../Components/ListingCard.js';
import BookingDetails from '../Components/BookingDetails.js';

class BookingContainer extends Component {
  render() {
    return(
      <div>
      <ListingCard listing={this.props.listing} />
      <BookingDetails listing={this.props.listing} searchObj={this.props.searchObj} />
      </div>
    )
  }
}

export default BookingContainer

// add in listingCard component
