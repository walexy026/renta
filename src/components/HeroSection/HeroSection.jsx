import React from "react";
import "./HeroSection.scss";
import textHero from "../../Assets/textHero.svg";
import HeroTab from "../Tabs/HeroTab";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="circleText">
        <img src={textHero} alt="textHero" />
      </div>
      <div className="heroText">
        <h1>Discover the perfect property</h1>
        <p>Find real estate to purchase, rent and sell without hassle</p>
        <div className="tt">
          <HeroTab />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
