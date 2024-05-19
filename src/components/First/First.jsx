// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom';
import "./First.css"
import backVideo  from "./backvideo.mp4"

const First= () => {
  return (
    <>
      <div className="login-details-container">
        <video autoPlay muted className="background-video">
          <source src={backVideo} type="video/mp4" />
        </video>
        <div className="button-container">
         <Link to={"/login"}><button className='Login'>Login</button></Link>
         <Link to={"/signup"}><button className='Sign-up'>SignUp</button></Link>
        </div>
      </div>
    </>
  )
}

export default First
