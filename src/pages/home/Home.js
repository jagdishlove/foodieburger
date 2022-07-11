import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/menu");
  };
  return (
    <div className="homeContainer">
      <p>Welcome To Food's Kitchen</p>
      <button onClick={clickHandler} className="menuBtn">
        GO TO MENU
      </button>
    </div>
  );
}

export default Home;
