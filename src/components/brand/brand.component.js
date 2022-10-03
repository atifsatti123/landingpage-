import React from "react";
import "./brand.styles.css";
import images1 from "../../images/Group2.png";
import images2 from "../../images/Group2.png";
import images3 from "../../images/Group3.png";
import images4 from "../../images/Group4.png";
import images5 from "../../images/Group5.png";
import images6 from "../../images/Group6.png";
import images7 from "../../images/Group7.png";

const Brandcomponent = () => {
  return (
    <div className="brand-heading">
      <h4>Over 32k+ software businesses growing with AR Shakir</h4>

      <div className="img-wrapper">
     
        <div className="inner">
          <img src={images2} />
        </div>
      
        <div className="inner">
          <img src={images4} />
        </div>
        <div className="inner">
          <img src={images3} />
        </div>
        <div className="inner">
          <img src={images5} />
        </div>
        <div className="inner">
          <img src={images1} />
        </div>
        <div className="inner">
          <img src={images6} />
        </div>
        <div className="inner">
          <img src={images7} />
        </div>
      </div>
    </div>
  );
};

export default Brandcomponent;
