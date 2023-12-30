import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img style={{ width: "35%", marginLeft: "40%" }} src={logo}></img>
        </div>
        <div className="menus">
          <p
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </p>
          <p>Who We Are</p>
          <p
            onClick={() => {
              navigate("/service");
            }}
          >
            Our Services
          </p>
          <p
            onClick={() => {
              navigate("/blog");
            }}
          >
            Blog
          </p>
          <p
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact Us
          </p>
        </div>
        <button className="bookbtn">
          Book Session With Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
