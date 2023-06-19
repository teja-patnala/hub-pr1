import './index.css'
import {CgInstagram} from 'react-icons/cg'
import {ImLinkedin} from 'react-icons/im'
import {AiFillFacebook} from 'react-icons/ai'

const Footer = () => (
  <div className="footer-container">
    <CgInstagram className="icon" />
    <ImLinkedin className="icon" />
    <AiFillFacebook className="icon" />
  </div>
)
export default Footer
