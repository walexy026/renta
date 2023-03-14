import React from "react";
import "./Footer.scss";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const companyLinks = ["Company", "About", "Become agent"];
  const servicesLinks = ["Insurance", "Blog", "Zeenah Pay", "Useful Links"];
  const supportLinks = ["Support", "Knowledge base", "Contact us"];

  const socialIcons = [
    <BsFacebook />,
    <FaTwitter />,
    <BsLinkedin />,
    <FaInstagram />,
  ];

  return (
    <div className="footerItems">
      <footer>
        <div className="row">
          <div className="brand">
            <h2>RENTA</h2>
          </div>
          <address className="description">
            Discover perfect homes and lands at affordable prices.
          </address>
          <div className="social-icons">
            {socialIcons.map((icon) => {
              return <div className="icon">{icon}</div>;
            })}
          </div>
        </div>
        <div className="row">
          <h3>Company</h3>
          <ul className="list">
            {servicesLinks.map((link) => {
              return (
                <li className="listLink" key={link}>
                  {link}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="row">
          <h3>Useful Links</h3>
          <ul className="list">
            {companyLinks.map((link) => {
              return (
                <li className="listLink" key={link}>
                  {link}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="row">
          <h3>Support</h3>
          <ul className="list">
            {supportLinks.map((link) => {
              return (
                <li className="listLink" key={link}>
                  {link}
                </li>
              );
            })}
          </ul>
        </div>
      </footer>
      <hr />
      <div className="lowerFooter">
        <span>Copyright &#169; Renta</span>
        <span>Privacy | Terms and conditions</span>
      </div>
    </div>
  );
};

export default Footer;
