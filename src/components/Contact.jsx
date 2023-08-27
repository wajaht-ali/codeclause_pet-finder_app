import React from 'react'
import { Toaster, toast } from "react-hot-toast";
import { MdSend } from "react-icons/md";
import "../styling/Contact.scss";
import Footer from './Footer';

const Contact = () => {

  const notify = () => {
    toast("Response Submitted Successfully!",  {
      duration: 4000,
      icon: '👏',
      position: "top-center"
    })
  }


  return (
    <div >
      <div className="contact-page">
        <div className="heading">
          <h1>Contact us for any kind of query!</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, necessitatibus.</p>
        </div>
        <div className="contact-form">
          <form action="">

            <div className="form-items">
              <label htmlFor="name">Name: </label>
              <input type="text" id='name' placeholder='Your name...' required />
              <label htmlFor="email">Email: </label>
              <input type="email" id='name' placeholder='Your email...' required />
              <label htmlFor="message">Message: </label>
              <textarea cols="30" id='message' rows="10" placeholder='Your Message...'></textarea>
              <button onClick={notify}><MdSend /></button>
              <Toaster />
            </div>

          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;