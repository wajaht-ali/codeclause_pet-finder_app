import React from 'react'

import { AiOutlineMail, AiFillFacebook, AiFillTwitterCircle, AiFillLinkedin, AiFillGooglePlusSquare } from "react-icons/ai";
import { MdLocationOn, MdPhone } from "react-icons/md";
import { MdArrowCircleUp } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import img1 from "../assets/imgs/img1.jpeg";
import img2 from "../assets/imgs/img2.jpeg";
import img3 from "../assets/imgs/img3.jpeg";
import img4 from "../assets/imgs/img4.jpeg";
import img5 from "../assets/imgs/img5.jpeg";

import "../styling/Footer.scss";
const Footer = () => {
    return (
        <div className='footer'>
            <div className="main">
                <div className="contacts box">
                    <h1>Contact Us</h1>
                    <div className="credentials">
                        <div className="address">
                            <MdLocationOn />
                            <p>303 Street Lorem, Paris, France</p>
                        </div>
                        <div className="phone">
                            <MdPhone />
                            <p>+44 123-555-555</p>
                        </div>
                        <div className="mail">
                            <AiOutlineMail />
                            <p>info@petfinder.com</p>
                        </div>
                    </div>
                    <div className="icons">
                        <ul>
                            <li><NavLink className="svg" to={"http://www.facebook.com"}><AiFillFacebook /></NavLink></li>

                            <li><NavLink className="svg" to={"http://www.facebook.com"}><AiFillTwitterCircle /></NavLink></li>

                            <li><NavLink className="svg" to={"http://www.facebook.com"}><AiFillGooglePlusSquare /></NavLink></li>

                            <li><NavLink className="svg" to={"http://www.facebook.com"}><AiFillLinkedin /></NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="opening box">
                    <h1>Working Hours</h1>
                    <div className="timings">
                        <div className="line">
                            <p>Monday - Friday</p>
                            <p id='p2'>10.00am - 8.00pm</p>
                        </div>
                        <div className="line">
                            <p>Saturday</p>
                            <p id='p2'>10.00am - 1.00pm</p>
                        </div>
                        <div className="line">
                            <p>Sunday </p>
                            <p id='p2'>Closed</p>
                        </div>
                    </div>
                </div>
                <div className="instagram box">
                    <h1>Instagram</h1>
                    <div className="posts">
                        <img src={img1} alt="img1" />
                        <img src={img2} alt="img2" />
                        <img src={img3} alt="img3" />
                        <img src={img4} alt="img4" />
                        <img src={img3} alt="img3" />
                        <img src={img4} alt="img4" />
                        <img src={img5} alt="img5" />
                        <img src={img1} alt="img1" />
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="copyrights">
                    <p>&copy;Coyyright 2023. Pet Finder. All Rights Reserved by Wajahat Dev.</p>
                </div>
                <div className="nav-icons">
                    <ul>
                        <li><NavLink to={"/"} id='link'>Home</NavLink></li>
                        <li><NavLink to={"/about"} id='link' >About</NavLink></li>
                        <li><NavLink to={"/services"} id='link' >Services</NavLink></li>
                        <li><NavLink to={"/contact"} id='link' >Contact</NavLink></li>
                    </ul>
                </div>
                <div className="btn-top">
                    <a href="#home" id='btn'><MdArrowCircleUp /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;