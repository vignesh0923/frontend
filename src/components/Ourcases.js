import React from "react";
import { useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css"
import "../css/Ourcases.css";
// import left from "../Assets/left.png"
// import right from "../Assets/right.png"
// import image1 from "../Assets/image1.jpg"
import image1 from "../Assets/market1.jpg";
import image2 from "../Assets/uiux2.jpg";
import image3 from "../Assets/digi3.jpg";
import image4 from "../Assets/webdesign4.jpg";
import image5 from "../Assets/brand5.jpg";
import image6 from "../Assets/seo6.jpg";
const Ourcases = () => {

  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div>
      <div className="ourcases">
        <span style={{ fontWeight: "bold" }}>
          FEATURED <span style={{ color: "#f1bd33" }}>PROJECTS</span>
        </span>
        <h2 style={{ marginTop: "2vw", fontWeight:"bold", fontSize:"40px"}}>Our Case Studies</h2>
        <p style={{ width: "50%", margin: "auto", paddingBottom: "20px" }}>
          At Kriya & Reeths, we take pride in our ability to deliver outstanding
          results for our clients. Our case studies illustrate how we’ve helped
          businesses like yours achieve their digital goals and drive measurable
          success. Take a closer look at some of our success stories:
        </p>
      </div>
      <div style={{marginTop:"8vw"}} className="grid-wrap" >
        <div className="row">
          <div className="column" data-aos="zoom-out-up">
            <img src={image1} />
            <div className="text-overlay">
              <span>marketing</span>
              <p>Social Media Campaign Success</p>
            </div>
          </div>

          <div className="column" data-aos="zoom-out-up">
            <img src={image4} />
            <div className="text-overlay">
              <span>Web Design</span>
             <p>Building a Scalable E-commerce Platform</p>
            </div>
          </div>
          <div className="column" data-aos="zoom-out-up">
            <img src={image3} />
            <div className="text-overlay">
              <span>Brand Identity</span>
              <p>Brand Consistency Across Channels</p>
              <p></p>
            </div>
          </div>
          <div className="column" data-aos="zoom-out-up">
            <img src={image2} style={{ marginTop: "-330px" }} />
            <div className="text-overlay">
              <span>UX/UI Design</span>
              <p>Mobile App Usability</p>
            </div>
          </div>
          <div className="column" data-aos="zoom-out-up">
            <img
              src={image5}
              style={{
                height: "340px",
                marginTop: "-130px",
                objectFit: "cover",
              }}
            />
            <div className="text-overlay">
              <span>Brand Identity</span>
              <p>Branding for Startups</p>
            </div>
          </div>
          <div className="column" data-aos="zoom-out-up">
            <img src={image6} style={{ height: "280px", objectFit: "cover", marginTop:"-70px" }} />
            <div className="text-overlay">
              <span>SEO</span>
              <p>Your website top of Google searches.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourcases;
