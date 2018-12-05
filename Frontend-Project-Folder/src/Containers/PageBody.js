import React, { Component } from 'react'
import Search from '../Components/Search.js';
import ResultsContainer from './ResultsContainer.js';
import BookingContainer from './BookingContainer.js';
import Login from '../Components/Login.js';
import Nav from '../Components/Nav.js';
import Account from '../Components/Account.js'
import Confirmation from '../Components/Confirmation.js';
import {Route, Link, BrowserRouter as Router, Redirect} from 'react-router-dom'


class PageBody extends Component {

  state = {
    listingData: [],
    guestsData: [],
    citiesData: [],
    display: "login",
    user: "",
    searchObject: {
      city: "",
      tripStart: "2018-11-30",
      tripEnd: "2018-12-05",
      guests: 1
    },
    listingToBook: {},
    booked: {}
  }

  componentDidMount() {
    this.fetchListings()
  }

  fetchListings = () => {
    fetch('http://localhost:3001/api/v1/listings')
      .then(resp => resp.json())
      .then(listingJson => {
        const listingsWithFavorited = listingJson.map(listing => {
          return {...listing, favorited: false}
        })

        this.setState({
          listingData: listingsWithFavorited
        })
      })
  }

  toggleFavorite = (listingObj) => {
    const updatedListings = this.state.listingData.map((listing) => {
      if (listing.id === listingObj.id) {
        return {...listing, favorited: !listing.favorited}
      }
      else {
        return listing
      }
    })
    this.setState({ listingData: updatedListings }, () => console.log(this.state.listingData))
  }

  handleBooking = (listingObj) => {
    this.setState({
      listingToBook: listingObj,
      display: "booking"
    })
  }

  confirmBooking = (confirmedBooking) => {
    this.setState({
      booked: confirmedBooking,
      display: "confirmation"
    })
    this.postBooking(confirmedBooking, this.state.listingToBook)
  }

  postBooking = (confirmedBooking, listingToBook) => {
    console.log('posting');

    fetch('http://localhost:3001/api/v1/bookings', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(
          {
            listing_id: listingToBook.id,
            user_id: 1,
            start_date: confirmedBooking.tripStart,
            end_date: confirmedBooking.tripEnd,
            guests: confirmedBooking.guests
          })
    })
    .then(response => response.json())
    .then(resp => console.log(resp))

  }

  loggedIn = (loginObj) => {
    // debugger
    console.log(loginObj);
    // window.history.pushState({}, '', 'search')
    this.setState({
      user: loginObj,
      display: "search"
    })

  }

  searchListings = (searchObj) => {
    this.setState({
      searchObject: searchObj,
      display: "results"
    })
  }

  updateDisplay = (newDisplay) => {
    console.log('new display', newDisplay);
    this.setState({ display: newDisplay })
  }

  renderPageBody = () => {
    console.log(this.state.display);

    switch (this.state.display) {
      case "login":
        return  <Redirect to="/login"/>
      case "search":
        return <Redirect to="/search"/>
      case "results":
        return <Redirect to="/results"/>
      case "booking":
        return <Redirect to="/booking"/>
      case "confirmation":
        return <Redirect to="/confirmation"/>
      case "account":
        return <Redirect to="/account"/>
      default:
        return <Redirect to="/login"/>
    }
  }

  render() {
    return(
      <div>
      <Nav updateDisplay={this.updateDisplay}/>
      <Route path="/login" render={(props)=><Login {...props} loggedIn={this.loggedIn}/>}/>

      <Route path="/search" render={(props)=><Search {...props} searchListings={this.searchListings} />}/>

      <Route path="/results" render={(props)=><ResultsContainer listingData={this.state.listingData} guestsData={this.state.guestsData} citiesData={this.state.citiesData}
      searchObject={this.state.searchObject}
      toggleFavorite={this.toggleFavorite}
      handleBooking={this.handleBooking}
      searchObj={this.state.searchObject}/>}/>

      <Route path="/booking" render={(props)=><BookingContainer listing={this.state.listingToBook}
      confirmBooking={this.confirmBooking}
      searchObj={this.state.searchObject}
      display={this.state.display}/>}/>

      <Route path="/confirmation" render={(props)=><Confirmation listing={this.state.listingToBook}
      booked={this.state.booked} searchObj={this.state.searchObject}/>}/>

      <Route path="/account" render={(props)=><Account user={this.state.user}/>}/>

      {this.renderPageBody()}

      </div>
    )
  }
}

export default PageBody

// <Route path="/login" render={(props)=><Login {...props} loggedIn={this.loggedIn}/>}/>
// <Route path="/search" render={(props)=><Search {...props} searchListings={this.searchListings} />}/>

//
// {this.state.display === "login" ? <Route path="/login" render={(props)=><Login {...props} loggedIn={this.loggedIn}/>}/> : null}
// {this.state.display === "search" ? <Route path="/search" render={(props)=><Search {...props} searchListings={this.searchListings} />}/> : null}
