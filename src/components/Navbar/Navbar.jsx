import React from "react";
import "./Navbar.scss";
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
    </nav>
  );
};

export default Navbar;
