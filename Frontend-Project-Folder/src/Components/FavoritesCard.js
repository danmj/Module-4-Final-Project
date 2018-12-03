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

export default FavoritesCard
