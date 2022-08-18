import React, { useState } from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Nav() {
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <div className="nav-wrapper">
      <Link to="/">
        <span href="/" className="logo">
          WYAP
        </span>
      </Link>
      <div className={`burger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li
          className="link"
          onClick={() => {
            navigate("/");
            toggleMenu();
          }}
        >
          Home
        </li>
        <li
          className="link"
          onClick={() => {
            navigate("services");
            toggleMenu();
          }}
        >
          Services
        </li>
        <li
          className="link"
          onClick={() => {
            navigate("about");
            toggleMenu();
          }}
        >
          About
        </li>
      </ul>
    </div>
  );
}

export default Nav;
