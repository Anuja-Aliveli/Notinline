import { withRouter, Link } from "react-router-dom";
import {
  FaStethoscope,
  FaHome,
} from "react-icons/fa";
import "./index.css";

const links = ["/", "/doctors"];

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
            <FaStethoscope  />
          </Link>
        </div>
      </div>
    </>
  );
};

export default withRouter(Header);
