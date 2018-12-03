import React from 'react'

const ListingCard = (props) => {

  const handleFavorites = () => {
    props.toggleFavorite(props.listing)
  }

  const handleBooking = () => {
    props.handleBooking(props.listing)
  }



  return(
    <div class="listing-card">
      <h3>{props.listing.title}</h3>
      <p>Host: {props.listing.host_name}</p>
      <p>Rating: {props.listing.rating}/5.0 ({Math.floor(Math.random() * 100 + 1)} Ratings)</p>
      <p>Type: {props.listing.type}</p>
      <p>Rate: ${props.listing.price}/night, Max: {props.listing.max_guests} guests</p>

      <p>Description: {props.listing.description}</p>
      <p>Amenities: </p>
      <ul>
        <li>Elevator: {props.listing.amenities.elevator ? "yes" : "no"}</li>
        <li>Pet Friendly: {props.listing.amenities.pet_friendly ? "yes" : "no"}</li>
        <li>Kitchen: {props.listing.amenities.kitchen ? "yes" : "no"}</li>
        <li>WiFi: {props.listing.amenities.wi_if ? "yes" : "no"}</li>
        <li>TV: {props.listing.amenities.tv ? "yes" : "no"}</li>
        <li>Pool: {props.listing.amenities.pool ? "yes" : "no"}</li>
        <li>Parking: {props.listing.amenities.parking ? "yes" : "no"}</li>
      </ul>
      <button onClick={handleFavorites}>{props.listing.favorited ? "Remove" : "Favorite"}</button>
      <button onClick={handleBooking}>Book This Place</button>
    </div>
  )
}

export default ListingCard
