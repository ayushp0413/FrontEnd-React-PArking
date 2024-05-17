/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    contactNumber: '',
    vehicleNumber: '',
    address: '',
    age: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const { 
    username, 
    email, 
    password, 
    confirmPassword, 
    contactNumber, 
    vehicleNumber, 
    address, 
    age 
  } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name: username,
        email,
        password,
        contactNumber,
        vehicleNumber,
        address,
        age
      });
      console.log(response.data);
      navigate('/login');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="Signup-details-container">
      <img src='src\components\First\background.jpg' alt="background"></img>
      <div className="details-container">
        <form className="details-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number:</label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              placeholder="Enter your contact number"
              value={contactNumber}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="vehicleNumber">Vehicle Number:</label>
            <input
              type="text"
              id="vehicleNumber"
              name="vehicleNumber"
              placeholder="Enter your vehicle number"
              value={vehicleNumber}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your address"
              value={address}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              name="age"
              placeholder="Enter your age"
              value={age}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={onChange}
              />
              <button
                className='unique-button'
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '5px', top: '40%', transform: 'translateY(-50%)' }}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={onChange}
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
