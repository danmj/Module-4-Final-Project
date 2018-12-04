import React, { Component } from 'react'

class Search extends Component {

  state = {
    city: "",
    tripStart: "",
    tripEnd: "",
    guests: null,
    type: "",
    minPrice: null,
    maxPrice: null,
    minRating: null,
    maxRating: null,
    petClicked: false,
    wifiClicked: false,
    tvClicked: false,
    poolClicked: false,
    parkingClicked: false,
    kitchenClicked: false,
  }

  searchSubmitHandler = (e) => {
    e.preventDefault()
    this.props.searchListings(this.state)
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

  typeChanger = (e) => {
    this.setState({ type: e.target.value })
  }

  minPriceHandler = (e) => {
    this.setState({ minPrice: e.target.value })
  }

  maxPriceHandler = (e) => {
    this.setState({ maxPrice: e.target.value })
  }

  amenityHandler = (e) => {
    switch (e.target.value) {
      case "pet friendly":
        this.setState({ petClicked: !this.state.petClicked })
      case "wifi":
        this.setState({ wifiClicked: !this.state.wifiClicked })
      case "tv":
        this.setState({ tvClicked: !this.state.tvClicked })
      case "pool":
        this.setState({ poolClicked: !this.state.poolClicked })
      case "parking":
        this.setState({ parkingClicked: !this.state.parkingClicked })
      case "kitchen":
        this.setState({ kitchenClicked: !this.state.kitchenClicked }, () => console.log(this.state.kitchenClicked))
    }
  }

  minRatingHandler = (e) => {
    this.setState({ minRating: e.target.value })
  }

  maxRatingHandler = (e) => {
    this.setState({ maxRating: e.target.value })
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
            <option value={null}>0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8+">8+</option>
          </select>

          <br />

          <label htmlFor="type_dropdown">Shared or Private: </label>
          <select name="type" onChange={this.typeChanger}>
            <option value={null}>- Please make a selection -</option>
            <option value="shared">Shared</option>
            <option value="private">Private</option>
          </select>

          <br />

          <div>
            Amenities:
            Pet Friendly<input type="checkbox" name="amenity" value="pet friendly" onChange={this.amenityHandler}/>
            |
            WiFi<input type="checkbox" name="amenity" value="wifi" onChange={this.amenityHandler}/>
            |
            TV<input type="checkbox" name="amenity" value="tv" onChange={this.amenityHandler}/>
            |
            Pool<input type="checkbox" name="amenity" value="pool" onChange={this.amenityHandler}/>
            |
            Parking<input type="checkbox" name="amenity" value="parking" onChange={this.amenityHandler}/>
            |
            Kitchen<input type="checkbox" name="amenity" value="kitchen" onChange={this.amenityHandler}/>
          </div>

          <label>Min price: </label><input type="number" name="min_price" onChange={this.minPriceHandler}/> - <label>Max price: </label><input type="number" name="max-price" onChange={this.maxPriceHandler}/>

          <br />

          <label>Lowest rating: </label><input type="number" name="low_rating" onChange={this.minRatingHandler}/> - <label>Highest rating: </label><input type="number" name="high_rating" onChange={this.maxRatingHandler}/>

          <br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Search
