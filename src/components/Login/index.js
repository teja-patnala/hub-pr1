import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {connect} from 'react-redux'
import {
  LoginContainer,
  LoginCard,
  LoginContainer1,
  Image,
  Image1,
  Label,
  Input,
} from './styledComponents'

class Login extends Component {
  addTextUser = event => {
    const {dispatch} = this.props
    dispatch({
      type: 'LOGIN',
      payload: {username: event.target.value},
    })
  }

  addTextPassword = event => {
    console.log(event.target.value)
    const {dispatch} = this.props
    dispatch({
      type: 'LOGIN',
      payload: {password: event.target.value},
    })
  }

  loginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  loginFailure = errMsg => {
    const {dispatch} = this.props
    dispatch({
      type: 'LOGIN',
      payload: {loginStatus: true, text: errMsg},
    })
  }

  submitDetails = async event => {
    event.preventDefault()
    const {login} = this.props
    const {username, password} = login
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.loginSuccess(data.jwt_token)
    } else {
      this.loginFailure(data.error_msg)
    }
    const {dispatch} = this.props
    dispatch({
      type: 'LOGIN',
      payload: {username: '', password: ''},
    })
  }

  render() {
    const {login} = this.props
    const {text, password, username, loginStatus} = login
    return (
      <LoginContainer>
        <Image
          src="https://res.cloudinary.com/dxx7ni6cl/image/upload/v1682888332/Rectangle_1467erre_lje9xg.png"
          height="100%"
          width="50%"
          maxwidth="700px"
        />
        <LoginContainer1>
          <LoginCard onSubmit={this.submitDetails}>
            <Image1
              src="https://res.cloudinary.com/dxx7ni6cl/image/upload/v1682891002/Group_7731Logo_lmkl6j.png"
              height="30px"
              width="130px"
              maxwidth="700px"
            />
            <div style={{margin: '20px'}}>
              <Label htmlFor="username">Username</Label> <br />
              <Input
                onChange={this.addTextUser}
                value={username}
                type="text"
                id="username"
              />
            </div>
            <div style={{margin: '10px'}}>
              <Label htmlFor="password">Password</Label> <br />
              <Input
                onChange={this.addTextPassword}
                type="password"
                id="password"
                value={password}
              />
            </div>
            {loginStatus && <p className="para1">{text}</p>}
            <button
              onChange={this.addTextPassword}
              className="btn1"
              type="submit"
            >
              Login
            </button>
          </LoginCard>
        </LoginContainer1>
      </LoginContainer>
    )
  }
}

export default connect(store => store)(Login)
