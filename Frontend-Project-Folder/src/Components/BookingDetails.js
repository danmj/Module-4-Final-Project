import React, { Component } from 'react'

class BookingDetails extends Component {
  state = {
    tripStart: this.props.searchObj.tripStart,
    tripEnd: this.props.searchObj.tripEnd,
    guests: this.props.searchObj.guests
  }

  startChanger = (e) => {
    this.setState({ tripStart: e.target.value })
  }

  endChanger = (e) => {
    this.setState({ tripEnd: e.target.value })
  }

  guestChanger = (e) => {
    this.setState({ guests: e.target.value })
  }

  searchSubmitHandler = (e) => {
    e.preventDefault()

    // POST to bookings table
    // this.props.searchListings(this.state)
  }


  render() {
    return(
      <div>
        <form onSubmit={this.searchSubmitHandler}>

          <label htmlFor="start">Trip start date:</label>
          <input type="date"
          id="start"
          name="trip-start"
          min="2018-01-01"
          max="2018-12-31"
          value={this.state.tripStart}
          onChange={this.startChanger} /><br/>

          <label htmlFor="end">Trip end date:</label>
          <input type="date"
          id="end"
          name="trip-end"
          min="2018-01-01"
          max="2018-12-31"
          value={this.state.tripEnd}
          onChange={this.endChanger}/><br/>

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

export default BookingDetails


// guestNumbers = () => {
  //   let optionTags = []
  //   for (var i = 1; i <= this.props.listing.max_guests; i++) {
    //     optionTags.push(<option value="`${i}`">{i}</option>)
    //   }
    //   console.log(optionTags);
    //   return  optionTags.join(' ')
    // }
