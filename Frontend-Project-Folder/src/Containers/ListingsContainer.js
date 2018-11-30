import React, { Component } from 'react'
import ListingCard from '../Components/ListingCard.js';

class ListingsContainer extends Component {

  renderListingCards = () => {

    return this.props.listingData.map((listing) => {
    
      return <ListingCard key={listing.id} listing={listing}/>
    })
  }

  render() {
    return(
      <div>
        {this.renderListingCards()}
      </div>
    )
  }
}

export default ListingsContainer
