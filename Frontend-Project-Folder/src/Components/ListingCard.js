import React from 'react'
import '../stylesheets/Results.css';

const ListingCard = (props) => {
  const display = props.display

  const handleFavorites = () => {
    props.toggleFavorite(props.listing)
  }

  const handleBooking = () => {
    props.handleBooking(props.listing)
  }
  console.log('listingcard props  ', props);



  return(
    <div className="listing-card">
      <h3>{props.listing.name}</h3>
      <p>Host: {props.listing.owner}</p>
      <p>Rating: {props.listing.average_rating}/5.0 ({Math.floor(Math.random() * 100 + 1)} Ratings)</p>
      <p>Type: {props.listing.shared ? "Shared":"Private"}</p>
      <p>Rate: ${props.listing.price}/night, Max: {props.listing.max_occupants} guests</p>

      <p>Description: {props.listing.description}</p>
      <p>Amenities: </p>
      <ul>
        <li>Pet Friendly: {props.listing.ammenities.pet_friendly ? "yes" : "no"}</li>
        <li>Kitchen: {props.listing.ammenities.kitchen ? "yes" : "no"}</li>
        <li>WiFi: {props.listing.ammenities.wi_if ? "yes" : "no"}</li>
        <li>TV: {props.listing.ammenities.tv ? "yes" : "no"}</li>
        <li>Pool: {props.listing.ammenities.pool ? "yes" : "no"}</li>
        <li>Parking: {props.listing.ammenities.parking ? "yes" : "no"}</li>
      </ul>
      <div hidden={display === "booking"? true: false }>
        <button onClick={handleFavorites}>{props.listing.favorited ? "Remove" : "Favorite"}</button>
        <button onClick={handleBooking}>Book This Place</button>
      </div>
    </div>
  )
}

export default ListingCard
