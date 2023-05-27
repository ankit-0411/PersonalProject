import React, { useState } from "react";
// import "./App.css";
import { LOGO_URL } from "../Utils/Constant";

const Header = () => {
  const [LogBtn, SetLogBtn] = useState("Login");
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
          <button
            className="login"
            onClick={() => {
              // SetLogBtn("LogOut");
              LogBtn === "Login" ? SetLogBtn("LogOut") : SetLogBtn("Login");
            }}
          >
            {LogBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
