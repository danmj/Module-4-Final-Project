import React from 'react'
import logo from '../images/mockBnB.png'

const Nav = (props) => {
  return(
    <div id="full-navigation">
      <div id="nav-logo">
        <img src={logo} alt="mockBnB Logo" />
      </div>
      <div id="nav-bar">
        <nav id="nav">
        <a>Search </a>
        <a>Account</a>
        </nav>
      </div>
    </div>
  )
}

export default Nav
