import React from 'react'

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
      <img src={props.listing.photos[0].url} height="100" width="200" />
      <p>Rating: {props.listing.average_rating}/5.0</p>
      <p>Rate: ${props.listing.price}/night, Max: {props.listing.max_occupants} guests</p>
      <p>Description: {props.listing.description.slice(0, 100)}...</p>

      <button onClick={handleFavorites}>{props.listing.favorited ? "Remove" : "Favorite"}</button>
      <button onClick={handleBooking}>Book This Place</button>

      <hr />
    </div>
  )
}

export default FavoritesCard
