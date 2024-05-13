// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Contact.css'

const ContactUs = () => {
  return (
    <>

    <Navbar></Navbar>
    
     <div className="container">
      <h1>Contact Us</h1>
      <a href="index.html" style={{ left: 'auto' }}>
        <button style={{ backgroundColor: '#378be4' }}>Home</button>
      </a>
      <div className="contact-info">
        <p><strong>Email:</strong> app@example.com</p>
        <p><strong>Phone:</strong> 7804995620</p>
        <p><strong>Address:</strong> 123 Street, Indore</p>
      </div>
      <div className="contact-form">
        <form action="submit_contact_form.php" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="feedback-box">
        <h3>Feedback</h3>
        <textarea id="feedback" name="feedback" rows="5" placeholder="Enter your feedback here"></textarea>
        <button type="submit">Submit Feedback</button>
      </div>
      
    </div>
    
    
    </>
  )
}

export default ContactUs
