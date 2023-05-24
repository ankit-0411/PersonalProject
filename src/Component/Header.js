import React from "react";
// import "./App.css";
import { LOGO_URL } from "../Utils/Constant";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img alt="Logo" className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li> Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
