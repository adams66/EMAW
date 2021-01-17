import React, { useState } from "react";
import "./navbar.css";

import { FaBars } from "react-icons/fa";

import { GiKnifeFork, GiAmericanFootballPlayer } from "react-icons/gi";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="nav">
      <div onClick={handleClick} className="hamburger">
        {click ? null : <FaBars />}
      </div>

      <div className={click ? "nav-links-vertical" : "nav-links-container"}>
        <div onClick={handleClick} className="x">
          {click ? <GiKnifeFork /> : null}
        </div>

        <div className="link-container">
          <a href="https://www.google.com/">About</a>
        </div>

        <div className="link-container">
          <a href="https://www.google.com/">Members</a>
        </div>

        <div className="link-container">
          {click ? (
            <a href="https://www.google.com/">Champions</a>
          ) : (
            <a href="https://www.google.com/">
              {" "}
              <GiAmericanFootballPlayer />
            </a>
          )}
        </div>

        <div className="link-container">
          <a href="https://www.google.com/">Stats</a>
        </div>

        <div className="link-container">
          {click ? (
            <a href="https://www.google.com/">
              <GiAmericanFootballPlayer />
            </a>
          ) : (
            <a href="https://www.google.com/">Champions</a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
