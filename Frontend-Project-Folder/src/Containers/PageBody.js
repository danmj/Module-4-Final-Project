import React, { Component } from 'react'
import Search from '../Components/Search.js';
import ResultsContainer from './ResultsContainer.js';
import BookingContainer from './BookingContainer.js';
import Login from '../Components/Login.js';
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
    listingToBook: {}
  }

  componentDidMount() {
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

  loggedIn = (name) => {
    this.setState({
      user: name,
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
        return  <BookingContainer listing={this.state.listingToBook} searchObj={this.state.searchObject}/>
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
