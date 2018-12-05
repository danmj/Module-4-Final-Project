import React from 'react'

const Confirmation = (props) => {

  return(
    <div className="confirmation">
      <div>
      <h1>You're booking is confirmed.</h1>
      </div>

      <div>
      <h3>Trip Details</h3>
      <p>Check-in: {props.booked.tripStart}</p>
      <p>Check-out: {props.booked.tripEnd}</p>
      <p>Guests: {props.booked.guests}</p>
      </div>

      <div>
      <h3>{props.listing.name}</h3>
      <p>Rating: {props.listing.average_rating}</p>
      <p>Rate: ${props.listing.price}/night, Max: {props.listing.max_occupants} guests</p>
      <p>Description: {props.listing.description}</p>
      </div>
  </div>
  )
}

export default Confirmation
