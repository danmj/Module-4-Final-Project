import React, { Component } from 'react'
import ListingCard from '../Components/ListingCard.js';
import '../stylesheets/Results.css';

class ListingsContainer extends Component {

  state = {
    guests: false,
    type: true,

  }

  renderListingCards = () => {

    if (this.props.searchObject.type){
      if(this.props.searchObject.type === "shared") {
        const searchResults = this.props.listingData.filter(listing => {
          return listing.shared === true
        })
        return searchResults.map((listing) => {
          return <ListingCard key={listing.id} listing={listing} toggleFavorite={this.props.toggleFavorite} handleBooking={this.props.handleBooking}/>
        })
      }
      else if (this.props.searchObject.type === "private") {
        const searchResults = this.props.listingData.filter(listing => {
          return listing.shared === false
        })
        return searchResults.map((listing) => {
          return <ListingCard key={listing.id} listing={listing} toggleFavorite={this.props.toggleFavorite} handleBooking={this.props.handleBooking}/>
        })
      }
    }
    else if (this.props.searchObject.city) {
      const searchResults = this.props.listingData.filter(listing => {
        return listing.city === this.props.searchObject.city
      })
      return searchResults.map((listing) => {
        return <ListingCard key={listing.id} listing={listing} toggleFavorite={this.props.toggleFavorite} handleBooking={this.props.handleBooking}/>
      })
    }
    else if (this.props.searchObject.guests > 0) {
      const searchResults = this.props.listingData.filter(listing => {
        return listing.max_occupants >= this.props.searchObject.guests
      })
      return searchResults.map((listing) => {
        return <ListingCard key={listing.id} listing={listing} toggleFavorite={this.props.toggleFavorite} handleBooking={this.props.handleBooking}/>
      })
    }
    else if (this.props.searchObject.petClicked || this.props.searchObject.wifiClicked || this.props.searchObject.tvClicked || this.props.searchObject.poolClicked || this.props.searchObject.parkingClicked || this.props.searchObject.kitchenClicked) {

      //////////////////////////////////////////////////////////////
      ///////////// AMMENITIES FILTERS GO HERE /////////////////////
      //////////////////////////////////////////////////////////////

    }

    else if (this.props.searchObject.minPrice && this.props.searchObject.maxPrice) {
      const searchResults = this.props.listingData.filter(listing => {
        return parseFloat(this.props.searchObject.minPrice) <= parseFloat(listing.price) && parseFloat(this.props.searchObject.maxPrice) >= parseFloat(listing.price)
      })
      return searchResults.map((listing) => {
        return <ListingCard key={listing.id} listing={listing} toggleFavorite={this.props.toggleFavorite} handleBooking={this.props.handleBooking}/>
      })
    }

    else if (this.props.searchObject.minRating && this.props.searchObject.maxRating) {
      const searchResults = this.props.listingData.filter(listing => {
        return parseFloat(this.props.searchObject.minRating) <= parseFloat(listing.average_rating) && parseFloat(this.props.searchObject.maxRating) >= parseFloat(listing.average_rating)
      })
      return searchResults.map((listing) => {
        return <ListingCard key={listing.id} listing={listing} toggleFavorite={this.props.toggleFavorite} handleBooking={this.props.handleBooking}/>
      })
    }
  }




  newRenderFunction = () => {

    


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
