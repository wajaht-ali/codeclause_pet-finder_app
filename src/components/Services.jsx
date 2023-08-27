import React from 'react'
import "../styling/Services.scss";
import Footer from "./Footer.jsx";
import { BsScissors } from "react-icons/bs";
import { FaDog } from "react-icons/fa";
import { MdOutlineModelTraining, MdOutlinePets } from "react-icons/md";

const Services = () => {
  return (
    <div className='services'>
      <div className="top-section">
        <h4>We Love Your Pet</h4>
        <h1>Our Services</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, excepturi.</p>
      </div>

      <div className="services-section">
        <div className="cards">
          <div className="card">
            <FaDog />
            <h3>Pet Walking</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, vitae!</p>
          </div>

          <div className="card">
            <BsScissors />
            <h3>Pet Grooming</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, vitae!</p>
          </div>

          <div className="card">
            <MdOutlinePets />
            <h3>Pet Visit</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, vitae!</p>
          </div>
          
          <div className="card">
            <MdOutlineModelTraining />
            <h3>Pet Training</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, vitae!</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Services