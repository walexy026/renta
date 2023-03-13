import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  //   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  //   useEffect(() => {
  //     const changeWidth = () => {
  //       setScreenWidth(window.innerWidth);
  //     };

  //     window.addEventListener("resize", changeWidth);
  //     return () => {
  //       window.removeEventListener("resize", changeWidth);
  //     };
  //   }, []);
  return (
    <nav>
      <div className="logo">RENTA</div>
      {toggleMenu && (
        <ul>
          <li className="active">Insurance</li>
          <li className="navlinks" >Blog</li>
          <li className="navlinks">About</li>
          <li className="navlinks">
            <button>Get Started</button>
          </li>
        </ul>
      )}
      {toggleMenu ? (
        <FaBars onClick={toggleNav} className="fabars" />
      ) : (
        <FaTimes onClick={toggleNav} className="faTimes" />
      )}
    </nav>
  );
};

export default Navbar;
