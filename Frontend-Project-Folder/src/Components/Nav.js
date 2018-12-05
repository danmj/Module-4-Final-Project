import React, { Component } from 'react'
import logo from '../images/mockBnB.png'

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


  render(){
    return(
      <div id="full-navigation">
        <div id="nav-logo" class={this.state.logo} onMouseEnter={this.enterFunctionLogo} onMouseLeave={this.leaveFunctionLogo} onClick={this.props.logoHandler}>
          <img src={logo} alt="mockBnB Logo" />
        </div>
        <div id="nav-bar-search" class={this.state.search} onMouseEnter={this.enterFunctionSearch} onMouseLeave={this.leaveFunctionSearch} onClick={this.props.searchHandler}>
          <nav id="nav">
          <a>Search </a>
          </nav>
        </div>
        <div id="nav-bar-account" class={this.state.account} onMouseEnter={this.enterFunctionAccount} onMouseLeave={this.leaveFunctionAccount} onClick={this.props.accountHandler}>
          <nav id="nav">
          <a>Account</a>
          </nav>
        </div>
      </div>
    )
  }






}
