import React from "react";
import Slider from "react-slick";
import "./Partner.scss";
import Zoopla from "../../Assets/ZooplaPartner.svg";
import costruct from "../../Assets/ConstructConnectPartner.svg";
import zillow from "../../Assets/ZillowPartner.svg";
import realtor from "../../Assets/RealtorPartner.svg";
import housing from "../../Assets/housingPartner.svg";
const Partner = () => {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 3,
  //   slidesToScroll: 2,
  //   centerMode: true,
  //   centerPadding: "0",
  // };
  return (
    <div className="partner">
      <img src={Zoopla} alt="Zoopla" style={{ background: "#0b1757" }} />
      <img src={costruct} alt="costruct" style={{ background: "#0b1757" }} />
      <img src={zillow} alt="zillow" />
      <img src={realtor} alt="realtor" />
      <img src={housing} alt="housing" />
      {/* <Slider {...settings}>
        <div>
          <img src={Zoopla} alt="Zoopla" style={{ background: "#0b1757" }} />
        </div>
        <div>
          <img
            src={costruct}
            alt="costruct"
            style={{ background: "#0b1757" }}
          />
        </div>
        <div>
          <img src={zillow} alt="zillow" />
        </div>
        <div>
          <img src={realtor} alt="realtor" />
        </div>
        <div>
          <img src={housing} alt="housing" />
        </div>
      </Slider> */}
    </div>
  );
};

export default Partner;
