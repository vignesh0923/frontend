import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Contact.css";
import Aos from "aos"
import "aos/dist/aos.css"
import email from "../Assets/email.png";
import call from "../Assets/call.png";
import whatsapp from "../Assets/whatsapp.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Contact = () => {

  const navigate = useNavigate()
  useEffect(()=>{
    Aos.init();
  },[])
 
  return (
    <div>
      <Navbar/>
      <div id="contactus" data-aos="zoom-in-up" className="project">
        <div className="content" data-aos="fade-right">
          <h1 style={{ fontWeight: "bold" }}>Have a</h1><span
            style={{ fontSize: "3vw", fontWeight: "bolder", color: "#daa520"  }}
          >Project in mind ?
          </span>
          <h3 style={{marginTop:"1vw"}}>Let's talk about it</h3>
          <hr style={{ width: "500px", marginTop:"4vw" }} />
          <div className="mail">
            <div>
            <img src={email} style={{ width: "40px", paddingRight:"10px" }} />
            <span>info@kriyareeths.com</span>
            </div>
            <div>
            <img src={call} style={{ width: "40px", paddingRight:"10px" }} />
            <span>(+91) 7305979061</span>
            </div>
            <div>
            <img src={whatsapp} style={{ width: "40px", paddingRight:"10px" }} />
            <span>(+91) 7305979061</span>
            </div>
          </div>
        </div>
        <div className="form" data-aos="fade-left">
        <form method="">
          <div className="form-feild">
            <label for="Name">Name*</label>
            <input type="text"/>
            </div>
            <div className="form-feild">    
            <label for="Name">Company*</label>
            <input type="text"/>
            </div>
            <div className="form-feild">
            <label for="Name">Email*</label>
            <input type="email"/>
            </div>
            <div className="form-feild">
            <label for="Name">PhoneNumber*</label>
            <input type="number"/>
            </div>
            <div className="form-feild">
            <label for="Name">Message</label>
            <textarea placeholder="Enter your Message"></textarea>
          </div>
          <input type="submit" className="contactbtn"/>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
