import React, { Component } from 'react'
import BookingCard from './BookingCard.js';
import ListingCard from './ListingCard.js';
import {Route, Link, BrowserRouter as Router, Redirect} from 'react-router-dom'

export default class Account extends Component {
  state = {
    userBookings: [],
    userListings: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/users/1')
      .then(resp=>resp.json())
      .then(data=> {
        // console.log('data', data.bookings);
        let bookingIds = []
        data.bookings.forEach(x=> bookingIds.push(x.id))
        let userListingsArr = []
        this.props.listingData.forEach(listing => {
          if (bookingIds.includes(listing.id)) {
            userListingsArr.push(listing)
          }
        })

        this.setState({
          userBookings: data.bookings,
          userListings: userListingsArr
         })
         setTimeout(()=>{console.log(this.state)}, 2000)
      })
  }

  renderBookings = () => {
    // debugger
    if (this.state.userBookings.length > 0) {
      return this.state.userBookings.map(booking =>{
        return this.state.userListings.map(listing =>{
          if (booking.listing_id === listing.id) {
            return(
              <div>
                <BookingCard booking={booking}/>
                <ListingCard listing={listing} display="booking"/>
              </div>
            )
          }
        })
      })
    } else {
      return <h3>You don't have any bookings yet!</h3>
    }
  }

  render(){
    return(
      <div className="account">
        <h1>Your Bookings</h1>
        {this.renderBookings()}
      </div>
    )
  }

}
