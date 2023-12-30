import React, { useEffect } from "react";
import "../css/Ourservices.css";
import seo from "../Assets/seo.png";
import design from "../Assets/design.png";
import brand from "../Assets/brand.png";
import market from "../Assets/brandmarket.png";
import Aos from "aos"
import "aos/dist/aos.css"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Ourservices = () => {
  


  useEffect(()=>{
    Aos.init();


  },[])
  return (
    <div>
      <Navbar/>
      <div id="ourservices" className="ourservice" >
        <p style={{ fontWeight: "bold" }} data-aos="fade-up">OUR <span style={{color:"#f1bd33"}}>SERVICES</span></p>
        <h1  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" style={{ fontSize: "40px", fontWeight: "bold" }}>
          We Create Best Digital Services
        </h1>
        <p data-aos="fade-up" style={{ margin: "auto", width: "50%", color: "#5a5a5a" }}>
          Our digital services are the result of creativity, precision, and a
          relentless pursuit of perfection. From captivating content to
          cutting-edge marketing strategies, we deliver nothing less than the
          best.
        </p>
      </div>
      <div className="container">
        <div className="service" data-aos="fade-up-right">
          <img src={seo} style={{ width: "40%" }} />
          <h3>Search Engine Optimization</h3>
          <p>
            SEO is the secret sauce that makes your website show up at the top
            of Google searches
          </p>
        </div>
        <div className="service" data-aos="fade-up-left">
          <img src={design} style={{ width: "40%" }} />
          <h3 >Web Design</h3>
          <p>
            A well-designed website enhances user experience and conversion
            rates
          </p>
        </div>
        <div className="service" data-aos="fade-up-right">
          <img src={brand} style={{ width: "40%" }} />
          <h3 >Branding</h3>
          <p>
            Build a distinct brand identity that sets you apart and promotes
            trust with your audience.
          </p>
        </div>
        <div className="service" data-aos="fade-up-left">
          <img src={market} style={{ width: "40%", marginTop:"2vw", paddingBottom:"2vw" }} />
          <h3>Social Media Marketing</h3>
          <p>
          Harness the influence of social media to engage your target audience
            and boost brand recognition.
          </p>
        </div>
      </div>
      <button className="exbtn">Explore More</button>
      <Footer/>
    </div>
  );
};

export default Ourservices;
