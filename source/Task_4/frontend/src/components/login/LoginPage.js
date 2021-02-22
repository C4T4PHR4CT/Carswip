import React from 'react'
import Component from "../../extensions/Component"
import Data from './../../services/Data'
import './LoginPage.css'

class LoginPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      error: ''
    }

    this.login = this.login.bind(this)
  }

  login() {
    Data.getToken(this.state.username, this.state.password).then(response => {
      if (response.token != null) {
        sessionStorage.setItem('token', response.token)
        if (window.location.pathname === "/login")
          window.location.pathname = "/"
      } else {
        this.state.error = "Incorrect username or password"
      }
      Component.rerenderAll()
    })
  }

  render () {
    return (
      <div id='login_base'>
        <div>
          <p className='label'>username:</p>
          <input placeholder='Enter username' type='text' onChange={e => this.state.username = e.target.value} onKeyDown={e => {if (e.keyCode === 13) this.login()}}/>
          <p className='label'>password:</p>
          <input placeholder='Enter password' type='password' onChange={e => this.state.password = e.target.value} onKeyDown={e => {if (e.keyCode === 13) this.login()}}/>
          <button id='login_button' onClick={this.login}>Login</button>
          <p>Login credentials: user 1234</p>
          <p id='login_error' >{this.state.error}</p>
        </div>
      </div>
    )
  }
}

export default LoginPage