import React, { Component } from 'react'
import {Route, Link, BrowserRouter as Router, Redirect} from 'react-router-dom'

export default class Account extends Component {
  state = {
    userBookings: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/users/1')
      .then(resp=>resp.json())
      .then(data=> console.log(data))
  }

  render(){
    return(
      <div className="account">
        <h1>Account page here with bookings</h1>
      </div>
    )
  }

}
