// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Dashboard.css'
import Navbar from '../Navbar/Navbar';

function Dashboard() {
  // State to manage vehicle history data
  // eslint-disable-next-line no-unused-vars
  const [vehicleHistory, setVehicleHistory] = useState([
    { vehicleNumber: "ABC123", date: "2024-04-07", entryTime: "10:00 AM", exitTime: "12:00 PM" },
    { vehicleNumber: "XYZ456", date: "2024-04-07", entryTime: "01:00 PM", exitTime: "03:00 PM" }
  ]);

  return (
    <>
    <Navbar></Navbar>
    <div className="container-dashboard">
      <div className="firstContainer">
        <div className="profile">
          {/* Circular space for image */}
          <div className="image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVgdPnMdBjCdxkKFnwvfzcvEA6RTfYRMuEA&s" alt="none" />
          </div>
          {/* Name, Age, Vehicle Number */}
          <div className="details">
            <p1>John Doe</p1>
            <p>Age:30</p>
          </div>
          <div className="detail">
            <p><strong>Number:-</strong> XYZ123</p>
            <p><strong>Email:-</strong> janirudh5525@gmail.com</p>
            <p><strong>Contact No:-</strong> 6266927816</p>
            <p><strong>address:-</strong> xxx colony,indore</p>
            <p><strong>Vehicle Registered:-</strong> 2</p>
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
          <p1>History</p1>
          <table id="vehicleTable">
            <thead>
              <tr>
                <th>Vehicle No</th>
                <th>Date</th>
                <th>Entry Time</th>
                <th>Exit Time</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through vehicle history data and render table rows */}
              {vehicleHistory.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.vehicleNumber}</td>
                  <td>{entry.date}</td>
                  <td>{entry.entryTime}</td>
                  <td>{entry.exitTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
}

export default Dashboard;

