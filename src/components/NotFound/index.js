import './index.css'
import {Component} from 'react'

class NotFound extends Component {
  render() {
    return (
      <div className="not-found-container">
        <h1 style={{color: 'white'}}>Address not found</h1>
        <img
          className="not-found-image"
          alt="Not Found"
          src="https://res.cloudinary.com/dxx7ni6cl/image/upload/v1683492868/Group_7522_u4pwmf.png"
        />
      </div>
    )
  }
}
export default NotFound
