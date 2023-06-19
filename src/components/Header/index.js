import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {AiOutlineBars} from 'react-icons/ai'
import {Image2} from './styledComponents'

const Header = props => {
  const logoutFunction = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  const overlayStyles = {
    backgroundColor: 'transparent',
  }

  const goToHome = () => {
    const {history} = props
    history.replace('/')
  }

  return (
    <div className="header">
      <button type="button" onClick={goToHome} className="go-to-home-button">
        <Image2
          src="https://res.cloudinary.com/dxx7ni6cl/image/upload/v1682891002/Group_7731Logo_lmkl6j.png"
          height="27px"
          width="120px"
          maxwidth="700px"
        />
      </button>
      <div className="sub-header-container">
        <Link to="/" className="link-font">
          Home
        </Link>
        <Link to="/bookshelves" className="link-font">
          Bookshelves
        </Link>
        <button
          className="logout-button"
          onClick={logoutFunction}
          type="button"
        >
          Logout
        </button>
      </div>
      <div className="header-popup">
        <Popup
          trigger={
            <button className="popup-button" type="button">
              <AiOutlineBars
                style={{color: 'white', height: '34px', width: '34px;'}}
              />
            </button>
          }
          position="bottom right"
          overlayStyle={overlayStyles}
        >
          <div className="popup-container">
            <Link to="/" className="link-font">
              Home
            </Link>
            <Link to="/bookshelves" className="link-font">
              Bookshelves
            </Link>
            <button className="logout-button" onClick={logout} type="button">
              Logout
            </button>
          </div>
        </Popup>
      </div>
    </div>
  )
}
export default withRouter(Header)
