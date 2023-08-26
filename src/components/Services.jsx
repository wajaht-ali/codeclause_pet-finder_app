import React from 'react'
import "../styling/Services.scss";
import Footer from "./Footer.jsx";
import { BsScissors } from "react-icons/bs";
import { FaDog } from "react-icons/fa";
import {MdOutlineModelTraining, MdOutlinePets} from "react-icons/md";

const Services = () => {
  return (
    <div className='services'>
      <div className="top-section">
        <h4>We Love Your Pet</h4>
        <h1>Our Services</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, excepturi.</p>
      </div>



      <Footer />
    </div>
  )
}

export default Services