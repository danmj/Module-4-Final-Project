import React, { Component } from 'react'

const FavoritesCard = (props) => {

  const handleFavorites = () => {
    props.toggleFavorite(props.listing)
  }

  const handleBooking = () => {
    props.handleBooking(props.listing)
  }

  return(
    <div class="favorite-card">
    <h3>{props.listing.title}</h3>
    <p>Rating: {props.listing.rating}/5.0 ({Math.floor(Math.random() * 100 + 1)} Ratings)</p>
    <p>Rate: ${props.listing.price}/night, Max: {props.listing.max_guests} guests</p>
    <p>Description: {props.listing.description}</p>

    <button onClick={handleFavorites}>{props.listing.favorited ? "Remove" : "Favorite"}</button>
    <button onClick={handleBooking}>Book This Place</button>
  </div>
  )
}

export default FavoritesCard
