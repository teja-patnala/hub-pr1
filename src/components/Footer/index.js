import './index.css'
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from 'react-icons/ai'

const Footer = () => (
  <div className="footer-container">
    <AiFillInstagram className="icon" />
    <AiFillLinkedin className="icon" />
    <AiFillFacebook className="icon" />
    <AiOutlineTwitter className="icon" />
  </div>
)
export default Footer
