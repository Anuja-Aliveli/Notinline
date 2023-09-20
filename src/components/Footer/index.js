import {Link} from 'react-router-dom'
import './index.css'
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'

const Footer = () => (
  <div className="back">
    <div className="footer-container">
      <div className="logo-container-footer">
        <img
            className="logo-footer"
            alt="logo"
            src="https://res.cloudinary.com/dgkw0cxnh/image/upload/v1695133451/Notinline/logo_qghqpz.png"
          />
        <p className="white" style={{textAlign: 'center'}}>
          Your Health, Our Priority
        </p>
        <div className="icons">
          <div className="icon-container-footer">
            <FaFacebook className="icon-footer" />
          </div>
          <div className="icon-container-footer">
            <FaTwitter className="icon-footer" />
          </div>
          <div className="icon-container-footer">
            <FaInstagram className="icon-footer" />
          </div>
        </div>
        <div className="row">
          <p className="white right">
            <Link to="/" className="link-class">
              Donate
            </Link>
          </p>
          <p className="white">
            <Link to="/" className="link-class">
              Blog
            </Link>
          </p>
        </div>
      </div>
      <div className="links-container-footer">
        <div>
          <p className="white link-head">
            <b>Links</b>
          </p>
          <p className="white">
            <Link to="/" className="link-class">
              Find Doctors{' '}
            </Link>
          </p>
          <p className="white">
            <Link to="/" className="link-class">
              Home{' '}
            </Link>
          </p>
          <p className="white">
            <Link to="/" className="link-class">
              Services{' '}
            </Link>
          </p>
          <p className="white">
            <Link to="/" className="link-class">
              Why Choose US?{' '}
            </Link>
          </p>
        </div>
        <div>
          <p className="white link-head">
            <b>Others</b>
          </p>
          <p className="white">+91 6453217890</p>
          <p className="white">Terms and Conditions</p>
          <p className="white">notinline@gmail.com</p>
          <p className="white">Documentation</p>
        </div>
      </div>
    </div>
    <p className="white center">
      © 2023{' '}
      NotInLine
      All Rights Reserved.
    </p>
  </div>
)
export default Footer