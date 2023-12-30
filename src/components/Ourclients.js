import React from 'react'
import { useEffect } from 'react'
import "../css/Ourclients.css"
import Aos from "aos"
import "aos/dist/aos.css"
import client1 from "../Assets/client1.png"
import client2 from "../Assets/client2.png"
import client3 from "../Assets/client3.png"
import client4 from "../Assets/client4.png"
import client5 from "../Assets/client5.png"
import client6 from "../Assets/client6.png"
import client7 from "../Assets/client7.png"
import left from "../Assets/left.png"
import right from "../Assets/right.png"
const Ourclients = () => {

    useEffect(()=>{
        Aos.init();
      },[])

  return (
    <div>
        <div className='ourclients'>
            <h1 data-aos="fade-up"
     data-aos-anchor-placement="top-center"
 style={{fontWeight:"700" }}>Our <span style={{color:"#f1bd33"}}>Client's</span></h1>
            <p data-aos="fade-up" style={{color:"#5a5a5a", width:"50%", margin:"auto"}}>We take pride in the positive feedback and testimonials we receive from businesses we’ve had the privilege to work with. Here’s what some of our valued clients have to say about their experience with us</p>
        </div>
        <div  className='clients'>
            <div data-aos="fade-up" className='team'>
                <img src={client1}/>
                <div>
                <p>Zhagaram</p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <div data-aos="fade-up" className='team'>
                <img src={client2}/>
                <div>
                <p>The Enfielders Hub</p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <div data-aos="fade-up" className='team'>
                <img src={client3}/>
                <div>
                <p>Stallion Sports</p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <div data-aos="fade-up" className='team'>
                <img src={client4}/>
                <div>
                <p>Span Tents & Events</p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <div data-aos="fade-up" className='team'>
                <img src={client5}/>
                <div>
                <p>NSS Events & Decors</p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <div data-aos="fade-up" className='team'>
                <img src={client6}/>
                <div>
                <p>NSS Electricals</p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <div data-aos="fade-up" className='team'>
                <img src={client7}/>
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
    </div>
  )
}

export default Ourclients