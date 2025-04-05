import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import logo from "../assets/logo.jpg"; // Ensure this path is correct

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">WELCOME TO EASYEARN</h1>
      <img src={logo} alt="EasyEarn Logo" className="home-logo" />
      <p className="home-text">Choose what you are looking for:</p>
      <div className="button-container">
        <button className="home-button" onClick={() => navigate("/job-provider")}>
          JOB PROVIDER
        </button>
        <button className="home-button" onClick={() => navigate("/job-seeker")}>
          JOB SEEKER
        </button>
      </div>
    </div>
  );
};

export default Home;
