import React, { Component } from 'react'
import Search from '../Components/Search.js';
import ResultsContainer from './ResultsContainer.js';
import BookingContainer from './BookingContainer.js';
import Login from '../Components/Login.js';
import Confirmation from '../Components/Confirmation.js';
// import listings from '../data.js';
// import guests from '../data.js';
// import cities from '../data.js';

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
    document.body.style.backgroundColor = '#fff'
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


  logoClickRender = () => {
    if(this.props.logoClick === "results") {
      this.setState({ display: "results" })
    }
  }

  // fetchGuests = () => {
  //   fetch('http://localhost:3001/api/v1/users')
  //     .then(resp => resp.json())
  //     .then(listingJson => {
  //       const listingsWithFavorited = listingJson.map(listing => {
  //         return {...listing, favorited: false}
  //       })
  //
  //       this.setState({
  //         listingData: listingsWithFavorited
  //       })
  //     })
  // }

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

  renderPageBody = () => {

    switch (this.state.display) {
      case "login":
        return  <Login loggedIn={this.loggedIn}/>
      case "search":
        return <Search searchListings={this.searchListings} />
      case "results":
        return  <ResultsContainer listingData={this.state.listingData} guestsData={this.state.guestsData} citiesData={this.state.citiesData}
        searchObject={this.state.searchObject}
        toggleFavorite={this.toggleFavorite}
        handleBooking={this.handleBooking}
        searchObj={this.state.searchObject}/>
      case "booking":
        return  <BookingContainer listing={this.state.listingToBook}
        confirmBooking={this.confirmBooking}
        searchObj={this.state.searchObject}
        display={this.state.display}/>
      case "confirmation":
        return  <div className="confirmation-bg"><Confirmation listing={this.state.listingToBook}
        booked={this.state.booked} searchObj={this.state.searchObject}/> </div>
      default:
        return <Login loggedIn={this.loggedIn}/>
    }
  }

  render() {
    return(
      <div>
        {this.renderPageBody()}
      </div>
    )
  }
}

export default PageBody
