import React from 'react'
import '../stylesheets/Results.css';

const FavoritesCard = (props) => {

  const handleFavorites = () => {
    props.toggleFavorite(props.listing)
  }

  const handleBooking = () => {
    props.handleBooking(props.listing)
  }

  return(
    <div className="favorite-card">
    <h3>{props.listing.name}</h3>
    <p>Rating: {props.listing.average_rating}/5.0</p>
    <p>Rate: ${props.listing.price}/night, Max: {props.listing.max_occupants} guests</p>
    <p>Description: {props.listing.description}</p>

    <button onClick={handleFavorites}>{props.listing.favorited ? "Remove" : "Favorite"}</button>
    <button onClick={handleBooking}>Book This Place</button>
  </div>
  )
}

export default FavoritesCard
