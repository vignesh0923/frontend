import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png";
import "../css/Mainpage.css";
import Aos from "aos";
import "aos/dist/aos.css";
import create from "../Assets/create.png";
import connect from "../Assets/connect.png";
import convert from "../Assets/convert.png";
import content from "../Assets/content1.png";
import seo from "../Assets/seo.png";
import design from "../Assets/design.png";
import brand from "../Assets/brand.png";
import market from "../Assets/brandmarket.png";

import image1 from "../Assets/market1.jpg";
import image2 from "../Assets/uiux2.jpg";
import image3 from "../Assets/digi3.jpg";
import image4 from "../Assets/webdesign4.jpg";
import image5 from "../Assets/brand5.jpg";
import image6 from "../Assets/seo6.jpg";

import client1 from "../Assets/client1.png";
import client2 from "../Assets/client2.png";
import client3 from "../Assets/client3.png";
import client4 from "../Assets/client4.png";
import client5 from "../Assets/client5.png";
import client6 from "../Assets/client6.png";
import client7 from "../Assets/client7.png";

import blog1 from "../Assets/blog1.jpg";
import blog2 from "../Assets/blog2.jpg";
import blog3 from "../Assets/blog3.jpg";


const Mainpage = () => {
  
  const navigate = useNavigate()
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img style={{ width: "35%", marginLeft: "40%" }} src={logo}></img>
        </div>
        <div className="menus">
          <p onClick={()=>{navigate("/")}}>Home</p>
            <p>Who We Are</p>
            <p onClick={()=>{navigate("/service")}}>Our Services</p>
            <p onClick={()=>{navigate("/blog")}} >Blog</p>
            <p onClick={()=>{navigate("/contact")}} >Contact Us</p>
        </div>
          <button className="bookbtn">
              Book Session With Us
          </button>
      </div>
      <div className="homecontent">
        <img
          data-aos="fade-up"
          style={{ width: "100%", height: "100%" }}
          src={content}
        />
      </div>
      <div id="whatwedo" className="content-2">
        <div className="textcontent">
          <h2 data-aos="fade-up">
            What <span style={{ color: "#f1bd33" }}>We Do</span>
          </h2>
          <p
            data-aos="fade-up-right"
            style={{
              width: "50%",
              margin: "auto",
              marginTop: "2vw",
              color: "#5a5a5a",
            }}
          >
            Our team of experts, proven track record, and tailored solutions
            make us the ideal choice for your digital marketing needs. We stay
            ahead with innovative strategies and prioritize your success through
            a client-centric approach. At Kriya & Reeths, your digital success
            is our primary focus.
          </p>
        </div>
      </div>
      <div className="whatwedo">
        <div
          className="div"
          data-aos="flip-left"
          data-aos-anchor-placement="top-center"
        >
          <img src={create} style={{ width: "45%", padding: "20px" }} />
          <h2 style={{ padding: "10px", fontWeight: "bold" }}>Create</h2>
          <p>
            Crafting Compelling Content: We excel at creating engaging and
            unique content that captivates your target audience.{" "}
          </p>
        </div>
        <div
          className="div"
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
        >
          <img style={{ width: "45%", padding: "20px" }} src={connect} />
          <h2 style={{ padding: "10px", fontWeight: "bold" }}>Connect</h2>
          <p>
            Building Strong Online Communities: We're experts at fostering
            online communities where your brand can connect with its followers
          </p>
        </div>
        <div
          className="div"
          data-aos="flip-right"
          data-aos-anchor-placement="top-center"
        >
          <img style={{ width: "45%", padding: "20px" }} src={convert} />
          <h2 style={{ padding: "10px", fontWeight: "bold" }}>Convert</h2>
          <p>
            Turning Leads into Loyal Customers: Our strategic approach focuses
            on turning potential leads into loyal, long-term customers.
          </p>
        </div>
      </div>

      {/* Our Servicess */}
      <div id="ourservices" className="ourservice">
        <p style={{ fontWeight: "bold" }} data-aos="fade-up">
          OUR <span style={{ color: "#f1bd33" }}>SERVICES</span>
        </p>
        <h1
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          style={{ fontSize: "40px", fontWeight: "bold" }}
        >
          We Create Best Digital Services
        </h1>
        <p
          data-aos="fade-up"
          style={{ margin: "auto", width: "50%", color: "#5a5a5a" }}
        >
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
          <h3>Web Design</h3>
          <p>
            A well-designed website enhances user experience and conversion
            rates
          </p>
        </div>
        <div className="service" data-aos="fade-up-right">
          <img src={brand} style={{ width: "40%" }} />
          <h3>Branding</h3>
          <p>
            Build a distinct brand identity that sets you apart and promotes
            trust with your audience.
          </p>
        </div>
        <div className="service" data-aos="fade-up-left">
          <img
            src={market}
            style={{ width: "40%", marginTop: "2vw", paddingBottom: "2vw" }}
          />
          <h3>Social Media Marketing</h3>
          <p>
            Harness the influence of social media to engage your target audience
            and boost brand recognition.
          </p>
        </div>
      </div>
      <button className="exbtn">Explore More</button>

      {/* Case Studies */}
      <div className="ourcases">
        <span style={{ fontWeight: "bold" }}>
          FEATURED <span style={{ color: "#f1bd33" }}>PROJECTS</span>
        </span>
        <h2 style={{ marginTop: "2vw", fontWeight: "bold", fontSize: "40px" }}>
          Our Case Studies
        </h2>
        <p style={{ width: "50%", margin: "auto", paddingBottom: "20px" }}>
          At Kriya & Reeths, we take pride in our ability to deliver outstanding
          results for our clients. Our case studies illustrate how we’ve helped
          businesses like yours achieve their digital goals and drive measurable
          success. Take a closer look at some of our success stories:
        </p>
      </div>
      <div style={{ marginTop: "8vw" }} className="grid-wrap">
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
            <img
              src={image6}
              style={{
                height: "280px",
                objectFit: "cover",
                marginTop: "-70px",
              }}
            />
            <div className="text-overlay">
              <span>SEO</span>
              <p>Your website top of Google searches.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ourclients */}
      <div className="ourclients">
        <h1
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          style={{ fontWeight: "700" }}
        >
          Our <span style={{ color: "#f1bd33" }}>Client's</span>
        </h1>
        <p
          data-aos="fade-up"
          style={{ color: "#5a5a5a", width: "50%", margin: "auto" }}
        >
          We take pride in the positive feedback and testimonials we receive
          from businesses we’ve had the privilege to work with. Here’s what some
          of our valued clients have to say about their experience with us
        </p>
      </div>
      <div className="clients">
        <div data-aos="fade-up" className="team">
          <img src={client1} />
          <div>
            <p>Zhagaram</p>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
        <div data-aos="fade-up" className="team">
          <img src={client2} />
          <div>
            <p>The Enfielders Hub</p>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
        <div data-aos="fade-up" className="team">
          <img src={client3} />
          <div>
            <p>Stallion Sports</p>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
        <div data-aos="fade-up" className="team">
          <img src={client4} />
          <div>
            <p>Span Tents & Events</p>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
        <div data-aos="fade-up" className="team">
          <img src={client5} />
          <div>
            <p>NSS Events & Decors</p>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
        <div data-aos="fade-up" className="team">
          <img src={client6} />
          <div>
            <p>NSS Electricals</p>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
        <div data-aos="fade-up" className="team">
          <img src={client7} />
          <div>
            <p>Genuine Gadgets</p>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
      </div>

      {/* Blog */}
      <div id="blog" className="blogcontainer">
        <div className="bloghead">
          <h1 data-aos="zoom-in">
            Latest from <span style={{ color: "#f1bd33" }}>Blog</span>
          </h1>
          <p data-aos="fade-right">
            We believe in sharing knowledge and staying up-to-date with industry
            trends. Explore our latest blog posts to gain valuable insights,
            tips, and news related to UI/UX design, brand identity, web
            development, and digital marketing.
          </p>
        </div>

        <div className="divblog">
          <div data-aos="fade-up-right" className="blogcontain">
            <div>
              <img src={blog1} style={{ width: "425px" }} />
              <div className="cont">
                <button>DIGITAL MARKETING</button>
                <span>
                  Why Digital Marketing is important for online business
                </span>
                <p>
                  Digital marketing is essential for online businesses because
                  it provides a cost-effective, targeted, measurable, and
                  adaptable way to reach…
                </p>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="blogcontain">
            <div>
              <img src={blog2} style={{ width: "425px" }} />
              <div className="cont">
                <button style={{ width: "25%" }}>DISIGN</button>
                <span>The Art of Effective UI/UX Designs</span>
                <p>
                  Utilising immersive technologies and creating visual
                  aesthetics to the customer is the best way to attract the
                  target audience.…
                </p>
              </div>
            </div>
          </div>

          <div data-aos="fade-up-left" className="blogcontain">
            <div>
              <img src={blog3} style={{ width: "425px" }} />
              <div className="cont">
                <button style={{ width: "35%" }}>GOOGLE ADS</button>
                <span>Google Ads</span>
                <p>
                  Every business starts with well planned and strategy for
                  heading their business to reach success. Google ads leads the…
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
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

export default Mainpage;
