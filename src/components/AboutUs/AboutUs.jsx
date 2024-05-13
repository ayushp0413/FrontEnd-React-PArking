// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../Navbar/Navbar'
import './About.css'

const AboutUs = () => {
  return (
    <>
    <Navbar></Navbar>   
     <div className="container">
      <h1>About Us</h1>
      <div className="row">
        <div className="col">
          <div className="team-member">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhb-cKcX8sZPI9c6tpZmkikutnGB_fWZ9kg&s" alt="Member 1" />
            <div className="team-member-details">
              <h3>Asmika Jain</h3>
              <p>Lead Designer</p>
              <div className="social-links">
                <a href="#">Twitter </a>
                <a href="#"> LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="team-member">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhb-cKcX8sZPI9c6tpZmkikutnGB_fWZ9kg&s" alt="Member 2" />
            <div className="team-member-details">
              <h3>Arushi Puranik</h3>
              <p>Content Creator</p>
              <div className="social-links">
                <a href="#">Facebook   </a>
                <a href="#">Instagram</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="team-member">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhb-cKcX8sZPI9c6tpZmkikutnGB_fWZ9kg&s" alt="Member 3" />
            <div className="team-member-details">
              <h3>Bhumika Rathore</h3>
              <p>Lead Developer</p>
              <div className="social-links">
                <a href="#">GitHub  </a>
                <a href="#">Portfolio</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>Our Mission</h2>
      <p>We are a team of passionate creators dedicated to delivering high-quality content and innovative solutions to our audience. Our mission is to inspire and empower people through our work.</p>
    </div>
    </>

  )
}

export default AboutUs
