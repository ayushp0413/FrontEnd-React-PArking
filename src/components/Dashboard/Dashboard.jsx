// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';

function Dashboard() {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [useremail, setUserEmail] = useState('');
  const [uservehicleNumber, setUserVehicleNumber] = useState('');
  const [usercontactNumber, setUserContactNumber] = useState('');
  const [useraddress, setUserAddress] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }
        const response = await axios.get('http://localhost:5000/api/auth/user', {
          headers: {
            'x-auth-token': token
          }
        });
        const { username, age ,email ,vehicleNumber , contactNumber ,address} = response.data;
        setUserName(username);
        setUserAge(age);
        setUserEmail(email);
        setUserVehicleNumber(vehicleNumber)
        setUserContactNumber(contactNumber)
        setUserAddress(address)

      } catch (err) {
        console.error(err);
      }
    };

    fetchUserName();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-dashboard">
        <div className="firstContainer">
          <div className="profile">
            <div className="image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVgdPnMdBjCdxkKFnwvfzcvEA6RTfYRMuEA&s" alt="Profile" />
            </div>
            <div className="details">
              <p><strong>Name:- {userName}</strong></p> {/* Display the user's name */}
              <p>Age:{userAge}</p>
            </div>
            <div className="detail">
            <p><strong>Number:-</strong> {uservehicleNumber}</p>
            <p><strong>Email:-</strong> {useremail}</p>
            <p><strong>Contact No:-</strong> {usercontactNumber}</p>
            <p><strong>address:-</strong> {useraddress}</p>
            {/* <p><strong>Vehicle Registered:-</strong> 2</p> */}
          </div>
        </div>
      </div>
      <div className="secondContainer">
        <div className="box1">
          <p><strong>Add Vehicle +</strong></p>
          <div className="buttons">
            <button>Bike/Scooter</button>
            <button>Car</button>
          </div>
        </div>
        <div className="box2">
          <p>History</p>
          <table id="vehicleTable">
            <thead>
              <tr>
                <th>Vehicle No</th>
                <th>Date</th>
                <th>Entry Time</th>
                <th>Exit Time</th>
              </tr>
            </thead>
            
          </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
