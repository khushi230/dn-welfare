import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

import Logo from "./Logo";
import "../styles/mobileNavbar.css";

const MobileNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="flex justify-between">
          <div className="logo">
            <Logo />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <MenuIcon />
          </div>
        </div>

        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link className="text-white hover:text-yellow-300" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-yellow-300" to="/charity">
                Charity
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-yellow-300" to="/news">
                News
              </Link>
            </li>
            <li>
              <Link className=" text-white hover:text-yellow-300" to="/events">
                Events
              </Link>
            </li>

            <li>
              <Link className="text-white hover:text-yellow-300" to="/mission">
                Mission
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-yellow-300" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-yellow-300" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
