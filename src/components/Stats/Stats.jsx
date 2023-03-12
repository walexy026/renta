import React from "react";
import "./Stats.scss";
import hero from "../../Assets/herro2.svg";
import { BiHome } from "react-icons/bi";
import { BiMap } from "react-icons/bi";
import { GiTwoCoins } from "react-icons/gi";
const Stats = () => {
  const features = [
    {
      id: 1,
      icon: <BiHome fontSize="2rem" />,
      title: "Effortless management",
      expand: "Manage properties and pay rent remotely with ease",
    },
    {
      id: 2,
      icon: <GiTwoCoins fontSize="2rem" />,
      title: "Affordable prices",
      expand: "Purchase or rent homes and lands at affordable prices",
    },
    {
      id: 3,
      icon: <BiMap fontSize="2rem" />,
      title: "Easy discovery",
      expand: "Easily find properties near you or across the country",
    },
  ];
  return (
    <div>
      <div className="stats">
        <div className="statsText">
          <h2>We simply offer the best.</h2>
          <p>
            Settle in your dream home with Renta, we provide the best home
            options for families all around the country.
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
          <img src={hero} alt="hero" height="400px" />
        </div>
      </div>
      <div className="features">
        {features.map(({ id, icon, title, expand }) => {
          return (
            <div key={id} className="featureItems">
              <div className="icon">{icon}</div>
              <h5>{title}</h5>
              <h6>{expand}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
