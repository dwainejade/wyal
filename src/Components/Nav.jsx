import React from "react";
import "./Nav.scss";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-wrapper">
      <Link to="/">
        <span href="/" className="logo">
          WYAP
        </span>
      </Link>
      <FiMenu fontSize={34} />
    </div>
  );
}

export default Nav;
