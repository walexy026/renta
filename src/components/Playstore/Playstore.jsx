import React from "react";
import "./Playstore.scss";
import { SiGoogleplay } from "react-icons/si";
import { BsApple } from "react-icons/bs";
import playStore from "../../Assets/playStore.svg";
const Playstore = () => {
  return (
    <div>
      <div className="playstore">
        <img src={playStore} alt="playStore" />
        <div className="playText">
          <h5>Download the Renta app</h5>
          <h6>
            Download the Renta mobile app to begin your seamless journey and
            find your perfect property
          </h6>
          <div className="store">
            <div className="gStore">
              <BsApple fontSize="2rem" />
              <p>Available on App store</p>
            </div>
            <div className="aStore">
              <SiGoogleplay fontSize="2rem" />
              <p>Available on Play store</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playstore;
