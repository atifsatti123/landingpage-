import React from "react";
import "./management.styles.css";

const Managementcomponent = () => {
  return (
    <div className="management-content">
      <h6>Project Management App</h6>
      <p>
        Download our app and start your free
        <br /> trail to get started today!
      </p>
      <span>
        End-to-end payments and financial management in a single solution.
      </span>
      <div className="btn-wrap">
      <div className="btn1">
        <button>
          <i className="fa-brands fa-apple"></i>Playstore
        </button>
      </div>
      <div className="btn2">
        <button>
          <i className="icon fa-brands fa-google-play"></i>
          Google Play
        </button>
      </div>
    </div>
    </div>
  );
};

export default Managementcomponent;
