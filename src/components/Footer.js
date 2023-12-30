import React from "react";
import logo from "../Assets/logo.png";
import "../css/Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="comlogo">
          <img src={logo} style={{ width: "16%" }} />
          <p style={{ fontSize: "17px", width: "65%" }}>
            Welcome to kriya & Reeths – Your Partner for Digital Excellence We
            specialize in crafting compelling digital experiences that leave a
            lasting impression.
          </p>
        </div>

        <div className="ourproducts">
          <p>Our Products</p>
          <div className="products">
            <span>SearchEngineOptimization</span>
            <span>Content Marketing</span>
            <span>Email Marketing</span>
            <span>Performance Marketing</span>
            <span>Web Design</span>
          </div>
        </div>

        <div className="stayconnected">
          <p>StayConnected</p>
          <div className="social">
            <i class="fa-brands fa-x-twitter"></i>
            <span>twitter</span>
            
          </div>
          <div className="social">
            <i class="fa-brands fa-square-whatsapp"></i>
            <span>Whatsapp</span>
          </div>
          <div className="social">
            <i class="fa-brands fa-linkedin"></i>
            <span>linkedin</span>
          </div>
          <div className="social">
            <i class="fa-brands fa-square-facebook"></i>
            <span>Facebook</span>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="copyright">
        <div className="privacy">
          <p>Careers | Privacy Policy</p>
        </div>
        <div className="rights">
          <p>
            Copyright © 2023 - All rights reserved by 
            <span style={{ color: "#f1bd33", fontWeight: "bold" }}>
              Kriya & Reeths
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
