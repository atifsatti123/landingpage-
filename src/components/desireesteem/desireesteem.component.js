import React from "react";
import "./desire.styles.css";
import images from "../../images/desire.png";

const Desireesteemcomponent = () => {
  return (
    <div className="desire-wrapper">
      <div className="desire-left">
        {/* <p>asdsadsa</p> */}
        <img src={images} />
      </div>
      <div className="desire-right">
        <h1>
          My little garret repair to
          <br /> desire he esteem.
        </h1>
        <p>
          Just like we said before, we have tons of
          <br /> features that will helps you to manage you
          <br /> wallet. From income, outcome, montly usage,
          <br />
          and etc.
        </p>
        <div className="btn3">
          <button>Try for free</button>
        </div>
      </div>
    </div>
  );
};

export default Desireesteemcomponent;
