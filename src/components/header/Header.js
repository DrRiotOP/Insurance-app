import React, { useState } from "react";
import "./header.scss";
import { images } from "../../images";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = e => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <div>
      <header>
        <nav className="navbar container">
          <div className="logo">
            <img src={images.logo} alt="" />
          </div>
          <ul className={open ? `nav-items active` : `nav-items`}>
            <li className="btn btn--nav-btn">
              <Link to="/SignUpPage">
                Register
              </Link>
            </li>
            <li className="btn btn--nav-btn">
              <Link to="SignInPage">
                Sign In
              </Link>
            </li>
          </ul>
          <div className="hamburger">
            <img src={images.hamburger} alt="" onClick={handleClick} />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;