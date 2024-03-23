import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    showErrorMsg: false,
  }

  onRequestSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onRequestFail = error => {
    console.log(error)
    this.setState({errorMsg: error, showErrorMsg: true})
  }

  verifyUserDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const apiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onRequestSuccess(data.jwt_token)
    } else {
      this.onRequestFail(data.error_msg)
    }
  }

  onUsernameChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  render() {
    const {showPassword, showErrorMsg, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-bg-container">
        <form className="form-container" onSubmit={this.verifyUserDetails}>
          <div className="login-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="webite logo"
              className="webite-logo"
            />
          </div>
          <div className="inputs-container">
            <div className="input-container">
              <label htmlFor="username" className="label">
                USERNAME
              </label>
              <br />
              <input
                type="input"
                id="username"
                className="input-el"
                placeholder="Username"
                onChange={this.onUsernameChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="password" className="label">
                PASSWORD
              </label>
              <br />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="input-el"
                placeholder="Password"
                onChange={this.onPasswordChange}
              />
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="showPasswordCheckbox"
                  onChange={this.onShowPassword}
                />
                <label
                  htmlFor="showPasswordCheckbox"
                  className="checkbox-label"
                >
                  Show Password
                </label>
              </div>
            </div>
          </div>
          <div className="submit-container">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
          {showErrorMsg ? <p className="error-text">{`* ${errorMsg}`}</p> : ''}
        </form>
      </div>
    )
  }
}

export default LoginRoute
