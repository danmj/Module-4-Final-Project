import React from 'react'

const BookingCard = (props) => {

  return(
    <div className="listing-card">
      <p>--------</p>
      <p>Check-in: {props.booking.start_date}</p>
      <p>Check-out: {props.booking.end_date}</p>
      <p>Guests: {props.booking.guests}</p>

    </div>
  )
}

export default BookingCard
