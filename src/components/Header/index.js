import { withRouter, Link } from "react-router-dom";
import {
  FaStethoscope,
  FaCogs,
  FaPhone,
  FaHome,
} from "react-icons/fa";
import {BsFillQuestionSquareFill} from 'react-icons/bs'
import "./index.css";

const links = ["/", "/services", "/choose", "/contact", "/doctors"];

const Header = (props) => {
  const { match } = props;
  const { path } = match;
  return (
    <>
      <div className="nav-container-desktop">
        <div className="logo">
          <img
            alt="logo"
            src="https://res.cloudinary.com/dgkw0cxnh/image/upload/v1695133451/Notinline/logo_qghqpz.png"
          />
        </div>
        <div className="menu-container">
          <Link
            to={links[0]}
            className={path === links[0] ? "menu-item active" : "menu-item"}
          >
            Home
          </Link>
          <Link
            to={links[1]}
            className={path === links[1] ? "menu-item active" : "menu-item"}
          >
            Services
          </Link>
          <Link
            to={links[2]}
            className={path === links[2] ? "menu-item active" : "menu-item"}
          >
            Why Choose Us?
          </Link>
          <Link
            to={links[3]}
            className={path === links[3] ? "menu-item active" : "menu-item"}
          >
            Contact
          </Link>
          <Link
            to={links[4]}
            className={path === links[4] ? "menu-item active" : "menu-item"}
          >
            Find Doctors
          </Link>
        </div>
      </div>
      <div className="nav-container-mobile">
        <div className="logo">
          <img
            alt="logo"
            src="https://res.cloudinary.com/dgkw0cxnh/image/upload/v1695133451/Notinline/logo_qghqpz.png"
          />
        </div>
        <div className="menu-container">
          <Link
            to={links[0]}
            className={path === links[0] ? "icon active" : "icon"}
          >
            <FaHome />
          </Link>
          <Link
            to={links[1]}
            className={path === links[1] ? "icon active" : "icon"}
          >
            <FaCogs />
          </Link>
          <Link
            to={links[2]}
            className={path === links[2] ? "icon active" : "icon"}
          >
            <BsFillQuestionSquareFill />
          </Link>
          <Link
            to={links[3]}
            className={path === links[3] ? "icon active" : "icon"}
          >
            <FaPhone />
          </Link>
          <Link
            to={links[4]}
            className={path === links[4] ? "icon active" : "icon"}
          >
            <FaStethoscope  />
          </Link>
        </div>
      </div>
    </>
  );
};

export default withRouter(Header);
