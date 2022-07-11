import React from "react";
import "./header.css";
import LOGO from "../../Assets/LOGO/LOGO.png";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div onClick={() => navigate("/")} className="headerHeading">
        <img src={LOGO} alt="logo" />
        <p>FoodieBurger Resturant</p>
      </div>
    </div>
  );
}

export default Header;
