import React, { Component } from 'react'
import Search from '../Components/Search.js';
import ResultsContainer from './ResultsContainer.js';
import BookingContainer from './BookingContainer.js';
import Login from '../Components/Login.js';
import listings from '../data.js';
import guests from '../data.js';
import cities from '../data.js';

class PageBody extends Component {

  state = {
    listingData: listings,
    guestsData: guests,
    citiesData: cities,
    display: "login",
    user: "",
    searchObject: {
      city: "",
      tripStart: "2018-11-30",
      tripEnd: "2018-12-05",
      guests: 1
    }
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
        searchObject={this.state.searchObject}/>
      case "booking":
        return  <BookingContainer />
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
