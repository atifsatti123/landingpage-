import React from "react";
import "./navigation.styles.css";
// import '../css/styles.css';
import { useRef } from "react";

const Navigationcomponent = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div className="container">
      <div className="nav-wrapper">
        <h6>AR SHAKIR</h6>
        <nav ref={navRef}>
          <div className="my-nav-outer">
            <ul className="my-nav">
              <li>Product</li>
              <li>Template</li>
              <li>Blog</li>
              <li>Pricing</li>
            </ul>
          </div>
        </nav>

        <div className="nav-btn">
          <p>Sign In</p>
          <button>Start Free</button>
        </div>
      <div className="menu-wrapper">
      <div className="hamburger-menu">
          <div className="bar-top"></div>
          <div className="bar-middle"></div>
          <div className="bar-bottom"></div>
        </div>
      </div>
      </div>
    </div>
    
  );
};



export default Navigationcomponent;
