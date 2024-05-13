// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <>
    <div className="login-details-container">
          <img src = "src\components\First\background.jpg"/>
          <div className="details-container">
            {/* <h3>Login Details Page</h3> */}
            <form className="details-form">
              <div className="form-group">
                <label htmlFor="email">Email / Username:</label>
                <input type="text" id="email" name="email" placeholder="Enter your email or username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" />
              </div>
                <Link to={'/home'}><button type="submit">Login</button></Link>
            </form>
          </div>
        
    </div>
    </>
  )
}

export default Login
