import React from "react";
import "./HeroSection.scss";
import textHero from "../../Assets/textHero.svg";
const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="circleText">
        <img src={textHero} alt="textHero" />
      </div>
      <div className="heroText">
        <h1>Discover the perfect property</h1>
        <p>Find real estate to purchase, rent and sell without hassle</p>
        <div>
          <form action="">
            <div>
              <b>For sale</b>
              <b>To rent</b>
            </div>
            <label htmlFor="">Search city or state</label>
            <input type="text" name="" id="" placeholder="eg. Lekki or Enugu" />
            <button>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
