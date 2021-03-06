import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav-bar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <FontAwesomeIcon
              data-testid="x-btn"
              className="x-btn"
              icon={faTimes}
            />
          ) : (
            <FontAwesomeIcon
              data-testid="hamburger-btn"
              className="hamburger-btn"
              icon={faBars}
            />
          )}
        </div>
        <ul className={click ? "menu active" : "menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/blog"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              BLOG
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              PROJECTS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
