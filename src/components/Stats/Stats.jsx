import React from "react";
import "./Stats.scss";
import hero from "../../Assets/heroImage.svg";
const Stats = () => {
  return (
    <div className="stats">
      <div className="statsText">
        <h2>We simply offer the best.</h2>
        <p>
          Settle in your dream home with Renta, we provide the best home options
          for families all around the country.
        </p>
        <div className="statsNumber">
          <div className="statsFigure">
            <figure>500+</figure>
            <h6>Listed properties</h6>
          </div>
          <div className="statsFigure">
            <figure>100+</figure>
            <h6>Happy customers</h6>
          </div>
          <div className="statsFigure">
            <figure>35+</figure>
            <h6>Award winnings</h6>
          </div>
        </div>
      </div>
      <div className="statsImg">
        <img src={hero} alt="hero" height="220px" />
      </div>
    </div>
  );
};

export default Stats;
