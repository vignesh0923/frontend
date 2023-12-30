import React from "react";
import { useEffect } from "react";
import "../css/Blog.css";
import Aos from "aos";
import "aos/dist/aos.css";
import blog1 from "../Assets/blog1.jpg";
import blog2 from "../Assets/blog2.jpg";
import blog3 from "../Assets/blog3.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Blog = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <Navbar/>
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
      <Footer />
    </div>
  );
};

export default Blog;
