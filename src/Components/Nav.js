import React, { Component } from 'react'
import logo from '../images/mockBnB.png'
import Login from './Login.js'
import Search from './Search.js'
import {Route, Link, BrowserRouter as Router, Redirect} from 'react-router-dom'

export default class Nav extends Component {

  state = {
    logo: "",
    search: "",
    account: ""
  }

  enterFunctionLogo = () => {
    this.setState({ logo: "selected" })
  }
  leaveFunctionLogo = () => {
    this.setState({ logo: "" })
  }

  enterFunctionSearch = () => {
    this.setState({ search: "selected" })
  }
  leaveFunctionSearch = () => {
    this.setState({ search: "" })
  }

  enterFunctionAccount = () => {
    this.setState({ account: "selected" })
  }
  leaveFunctionAccount = () => {
    this.setState({ account: "" })
  }

  handleClick = (event) => {
    console.log(event.target.dataset.type);
    switch (event.target.dataset.type) {
      case "logo":
        this.props.updateDisplay("login")
        break;
      case "search":
        this.props.updateDisplay("search")
        break;
      case "account":
        this.props.updateDisplay("account")
        break;
      default: return
    }
  }



  render(){
    return(
      <div id="full-navigation" onClick={this.handleClick}>



        <div id="nav-logo" data-type="logo" class={this.state.logo} onMouseEnter={this.enterFunctionLogo} onMouseLeave={this.leaveFunctionLogo}>
          <img data-type="logo" src={logo} alt="mockBnB Logo" />
        </div>

        <div id="nav-bar-search" data-type="search" class={this.state.search} onMouseEnter={this.enterFunctionSearch} onMouseLeave={this.leaveFunctionSearch}>
          <nav id="nav" data-type="search">
          <a data-type="search">Search </a>
          </nav>
        </div>
        <div id="nav-bar-account" data-type="account" class={this.state.account} onMouseEnter={this.enterFunctionAccount} onMouseLeave={this.leaveFunctionAccount}>
          <nav id="nav" data-type="account">
          <a data-type="account">Account</a>
          </nav>
        </div>
      </div>
    )
  }






}
