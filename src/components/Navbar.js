import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            REACT CARD
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={handleClick}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-links" onClick={handleClick}>
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/history" className="nav-links" onClick={handleClick}>
                History
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i>
              {click ? (
                <svg
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496z"
                  />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <rect
                    width="18"
                    height="2"
                    x="3"
                    y="11"
                    fill="currentColor"
                    rx=".95"
                    ry=".95"
                  />
                  <rect
                    width="18"
                    height="2"
                    x="3"
                    y="16"
                    fill="currentColor"
                    rx=".95"
                    ry=".95"
                  />
                  <rect
                    width="18"
                    height="2"
                    x="3"
                    y="6"
                    fill="currentColor"
                    rx=".95"
                    ry=".95"
                  />
                </svg>
              )}
            </i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
