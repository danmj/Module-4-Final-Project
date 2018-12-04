import React, { Component } from 'react'

const FavoritesCard = (props) => {

  const handleFavorites = () => {
    props.toggleFavorite(props.listing)
  }

  const handleBooking = () => {
    props.handleBooking()
  }

  return(
    <div>
      <h3>{props.listing.title}</h3>
      <p>{props.listing.host_name}</p>
      <p>{props.listing.type}</p>
      <p>{props.listing.max_guests}</p>
      <p>{props.listing.price}</p>
      <p>{props.listing.rating}</p>
      <p>{props.listing.description}</p>

      <button onClick={handleFavorites}>{props.listing.favorited ? "Remove" : "Favorite"}</button>
      <button onClick={handleBooking}>Book This Place</button>
    </div>
  )
}

export default FavoritesCard
