import React from "react";
import "./Navbar.scss";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">RENTA</div>
      <ul>
        <li className="active">Insurance</li>
        <li>Blog</li>
        <li>About</li>
        <li>
          <button>Get Started</button>
        </li>
      </ul>
      <FaBars className="fabars" />
      <FaTimes className="faTimes" />
    </nav>
  );
};

export default Navbar;
