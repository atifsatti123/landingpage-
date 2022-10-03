import React from "react";
import Cardcomponent from "../card/card.component";
import "./services.styles.css";
import { useSelector } from "react-redux";

const Service = () => {
  const { services } = useSelector((state) => state.services);

  return (
     <section className="outer-wrapper">
       <span className="rainbow"></span>
    <div className="container service-container">
       
    <div className="services-content">
      <h2>Our Services</h2>
      <p>
        Save Time Managing Your Business
        <br />
        With Our Best Services
      </p>
      <div className="service-wrapper">
        {services && services.map((service) => (
        <Cardcomponent key={service.id} service={service}/>
        ))}
      </div>
    </div>
    </div>
    </section>
  );
};

export default Service;
