// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
    <div className="login-details-container">
          <img src = "src\components\First\background.jpg"/>
          <div className="details-container">
            {/* <h3>Login Details Page</h3> */}
            <form className="details-form">
              <div className="form-group">
                <label htmlFor="email">Username:</label>
                <input type="text" id="email" name="email" placeholder="Enter your username" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Password:</label>
                <input type="text" id="email" name="email" placeholder="Enter your password" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Confirm Password:</label>
                <input type="password" id="password" name="password" placeholder="confirm your password" />
              </div>
                <Link to={'/home'}><button type="submit">SignUp</button></Link>
            </form>
          </div>
        
    </div>
    </>
  )
}

export default Signup
