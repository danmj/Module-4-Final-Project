import React, { Component } from 'react'
import ListingCard from '../Components/ListingCard.js';
import '../stylesheets/Results.css';

class ListingsContainer extends Component {

  renderListingCards = () => {

    const afterCity = this.props.listingData.filter(listing => {
      return listing.city.toLowerCase() === this.props.searchObject.city.toLowerCase()
    })

    const afterCityGuests = afterCity.filter(listing => {
      return listing.max_occupants >= this.props.searchObject.guests
    })

    const afterCityGuestsPrice = afterCityGuests.filter(listing => {
      return parseFloat(this.props.searchObject.minPrice) <= parseFloat(listing.price) && parseFloat(this.props.searchObject.maxPrice) >= parseFloat(listing.price)
    })

    const afterCityGuestsPriceRating = afterCityGuestsPrice.filter(listing => {
      return parseFloat(this.props.searchObject.minRating) <= parseFloat(listing.average_rating) && parseFloat(this.props.searchObject.maxRating) >= parseFloat(listing.average_rating)
    })

    const afterCityGuestsPriceRatingType = afterCityGuestsPriceRating.filter(listing => {
      if (this.props.searchObject.shared === true) {
        return listing.shared === true
      }
      else if (this.props.searchObject.shared === false) {
        return listing
      }
    })

    const afterCityGuestsPriceRatingTypePets = afterCityGuestsPriceRatingType.filter(listing => {
      if (this.props.searchObject.petClicked === true) {
        return listing.ammenities.pet_friendly === true
      }
      else if (this.props.searchObject.petClicked === false) {
        return listing
      }
    })

    const afterCityGuestsPriceRatingTypePetsWifi = afterCityGuestsPriceRatingTypePets.filter(listing => {
      if (this.props.searchObject.wifiClicked === true) {
        return listing.ammenities.wifi === true
      }
      else if (this.props.searchObject.wifiClicked === false) {
        return listing
      }
    })

    const afterCityGuestsPriceRatingTypePetsWifiTv = afterCityGuestsPriceRatingTypePetsWifi.filter(listing => {
      if (this.props.searchObject.tv === true) {
        return listing.ammenities.tv === true
      }
      else if (this.props.searchObject.tvClicked === false) {
        return listing
      }
    })

    const afterCityGuestsPriceRatingTypePetsWifiTvPool = afterCityGuestsPriceRatingTypePetsWifiTv.filter(listing => {
      if (this.props.searchObject.poolClicked === true) {
        return listing.ammenities.pool === true
      }
      else if (this.props.searchObject.poolClicked === false) {
        return listing
      }
    })

    const afterCityGuestsPriceRatingTypePetsWifiTvPoolParking = afterCityGuestsPriceRatingTypePetsWifiTvPool.filter(listing => {
      if (this.props.searchObject.parkingClicked === true) {
        return listing.ammenities.parking === true
      }
      else if (this.props.searchObject.parkingClicked === false) {
        return listing
      }
    })

    const afterCityGuestsPriceRatingTypePetsWifiTvPoolParkingKitchen = afterCityGuestsPriceRatingTypePetsWifiTvPoolParking.filter(listing => {
      if (this.props.searchObject.kitchenClicked === true) {
        return listing.ammenities.kitchen === true
      }
      else if (this.props.searchObject.kitchenClicked === false) {
        return listing
      }
    })

    return afterCityGuestsPriceRatingTypePetsWifiTvPoolParkingKitchen.map((listing) => {
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
