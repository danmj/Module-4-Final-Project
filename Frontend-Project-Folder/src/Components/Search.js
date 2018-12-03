import React, { Component } from 'react'

class Search extends Component {

  state = {
    city: "New York",
    tripStart: "2018-12-05",
    tripEnd: "2018-12-14",
    guests: 1
  }

  startChanger = (e) => {
    this.setState({ tripStart: e.target.value })
  }

  endChanger = (e) => {
    this.setState({ tripEnd: e.target.value })
  }

  cityChanger = (e) => {
    this.setState({ city: e.target.value })
  }

  guestChanger = (e) => {
    this.setState({ guests: e.target.value })
  }

  searchSubmitHandler = (e) => {
    e.preventDefault()
    this.props.searchListings(this.state)
  }

  render() {
    return(
      <div className="search">
        <form onSubmit={this.searchSubmitHandler}>
          <label htmlFor="city">Search by city:</label>
          <input type="text" name="city" value={this.state.city} onChange={this.cityChanger}/>

          <label htmlFor="start">Trip start date:</label>
          <input type="date"
          id="start"
          name="trip-start"
          min="2018-01-01"
          max="2018-12-31"
          onChange={this.startChanger} />

          <label htmlFor="end">Trip end date:</label>
          <input type="date"
          id="end"
          name="trip-end"
          min="2018-01-01"
          max="2018-12-31"
          onChange={this.endChanger}/>

          <label htmlFor="guests_dropdown">Number of Guests:</label>
          <select name="guests" value={this.state.guests} onChange={this.guestChanger}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Search
