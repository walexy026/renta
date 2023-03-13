import React, { useState, useEffect } from "react";
import "./Navbar.scss";
// import { FaBars, FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", (e) => setIsNavOpen(false));

  // const [toggleMenu, setToggleMenu] = useState(false);
  //   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // const toggleNav = () => {
  //   setToggleMenu(!toggleMenu);
  // };
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
      <div className="toggle">
        {isNavOpen ? (
          <MdClose onClick={() => setIsNavOpen(false)} />
        ) : (
          <GiHamburgerMenu
            onClick={(e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
          />
        )}
      </div>

      {/* {toggleMenu && ( */}
      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul className="navGroup">
          <li className="active navlinks">Insurance</li>
          <li className="navlinks">Blog</li>
          <li className="navlinks">About</li>
          <li className="navlinks">
            <button>Get Started</button>
          </li>
        </ul>
      </div>
      {/* )} */}
      {/* {toggleMenu ? (
        <FaBars onClick={toggleNav} className="fabars" />
      ) : (
        <FaTimes onClick={toggleNav} className="faTimes" />
      )} */}
    </nav>
  );
};

export default Navbar;
