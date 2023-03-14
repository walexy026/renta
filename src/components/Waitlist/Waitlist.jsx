import React from "react";
import "./Waitlist.scss";
import waitlist from "../../Assets/bgwaitlist.svg";
import { CiMail } from "react-icons/ci";
const Waitlist = () => {
  return (
    <div className="wrapperWaitlist">
      <div className="waitList">
        <b>h</b>
        <img src={waitlist} alt="waitlist" />
        <div className="centerForm">
          <h2>Join Waitlist</h2>
          <p>
            Be amongst the pioneers of Renta, join the waitlist to get started.
          </p>
          <div className="wrapperForm">
            <CiMail className="mailIcon" />
            <form action="">
              <label htmlFor=""></label>
              <input
                className="waitlistForm"
                type="tel"
                name=""
                id=""
                placeholder="Enter your email address"
              />
              <button type="submit" className="waitListBtn">
                Join
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
