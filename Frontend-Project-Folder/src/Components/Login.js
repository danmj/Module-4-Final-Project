import React, { Component} from 'react';
import backgrounds from '../images/images.js'

export default class Login extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: ""
  }

  firstChangeHandler = (e) => {
    this.setState({ firstName: e.target.value })
  }

  lastChangeHandler = (e) => {
    this.setState({ lastName: e.target.value })
  }

  emailChangeHandler = (e) => {
    this.setState({ name: e.target.value })
  }

  loginSubmitHandler = (e) => {
    e.preventDefault()
    this.props.loggedIn(this.state)
  }

  // background = () => {
  //   console.log(backgrounds);
  //   const imageExt = backgrounds[Math.floor(Math.random()*backgrounds.length)]
  //   console.log(imageExt);
  //   return `./images/${imageExt}`
  // }

  render() {
    return(
      <div className="login">
        <h1>Welcome!</h1>
        <form onSubmit={this.loginSubmitHandler}>
          <h4><label>First Name:  </label>
          <input name="first-name" value={this.state.firstName} onChange={this.firstChangeHandler} /></h4>

          <h4><label>Last Name:  </label>
          <input name="last-name" value={this.state.lastName} onChange={this.lastChangeHandler} /></h4>
          
          <h4><label>Email:  </label>
          <input name="email" value={this.state.email} onChange={this.emailChangeHandler} /></h4>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
