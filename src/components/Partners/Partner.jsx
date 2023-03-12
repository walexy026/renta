import React from "react";
import "./Partner.scss";
import Zoopla from "../../Assets/ZooplaPartner.svg";
import costruct from "../../Assets/ConstructConnectPartner.svg";
import zillow from "../../Assets/ZillowPartner.svg";
import realtor from "../../Assets/RealtorPartner.svg";
import housing from "../../Assets/housingPartner.svg";
const Partner = () => {
  return (
    <div className="partner">
      <img src={Zoopla} alt="Zoopla" style={{ background: "#0b1757" }} />
      <img src={costruct} alt="costruct" style={{ background: "#0b1757" }} />
      <img src={zillow} alt="zillow" />
      <img src={realtor} alt="realtor" />
      <img src={housing} alt="housing" />
    </div>
  );
};

export default Partner;