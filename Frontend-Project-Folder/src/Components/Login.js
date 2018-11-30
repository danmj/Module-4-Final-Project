import React, { Component} from 'react';

export default class Login extends Component {

  state = {
    name: ""
  }

  loginChangeHandler = (e) => {
    this.setState({ name: e.target.value })
  }

  loginSubmitHandler = (e) => {
    e.preventDefault()
    this.props.loggedIn(this.state.name)
  }

  render() {
    return(
      <div>
        Login:
        <form onSubmit={this.loginSubmitHandler}>
          <input name="name" value={this.state.name} onChange={this.loginChangeHandler} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
