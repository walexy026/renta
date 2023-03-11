import React from "react";
import "./HeroSection.scss";
import textHero from "../../Assets/textHero.svg";
const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="circleText">
        <img src={textHero} alt="textHero" />
      </div>
      <div>
        <h1>Discover the perfect property</h1>
        <p>Find real estate to purchase, rent and sell without hassle</p>
        <div>
          <p>For sale</p>
          <p>To rent</p>
          <form action="">
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
