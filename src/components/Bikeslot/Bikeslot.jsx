/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Bikeslot.css'; 
import Navbar from '../Navbar/Navbar'; 
import axios from 'axios';
import { Link } from 'react-router-dom';


function BikeSlot() {
  const [availableSlots, setAvailableSlots] = useState(Array.from({ length: 36 }, (_, i) => i + 1));
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [showReceipt, setShowReceipt] = useState(false);
  const [bookedSlots, setBookedSlots] = useState([]);

  useEffect(() => {
    const fetchBookedSlots = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/booked-slots');
        setBookedSlots(response.data);
      } catch (err) {
        console.error('Error fetching booked slots:', err);
      }
    };

    fetchBookedSlots();
  }, []);

  const handleSlotSelection = (slot) => {
    if (selectedSlots.includes(slot)) {
      // If slot is already selected, remove it from the selected slots
      setSelectedSlots(selectedSlots.filter(selectedSlot => selectedSlot !== slot));
    } else if (!bookedSlots.includes(slot)) {
      // If slot is not already booked, add it to the selected slots
      setSelectedSlots([...selectedSlots, slot]);
    }
  };
  

  const handleButtonClick = async () => {
    try {
      await axios.post('http://localhost:5000/api/booked-slots', { selectedSlots });
      setShowReceipt(true);
    } catch (err) {
      console.error('Error storing selected slots:', err.response.data);
    }
  };
  function Receipt({ selectedSlots }) {
    const totalPrice = selectedSlots.length * 30; 
  
    return (
      <div className="receipt">
        <h3>Receipt</h3>
        <p>Number of Slots Booked: {selectedSlots.length}</p>
        <p>Selected Slots: {selectedSlots.join(', ')}</p>
        <p>Total Price: {totalPrice} INR</p>
        <Link to={'/Qrbike'}><button>Pay</button></Link>
      </div>
    );
  }
  

  return (
    <>
      <Navbar />
      <div className="center-container">
        <div className="max-width-container">
          <div className="parking-management-system">
            <h2>Bike Parking</h2>
            <div className="slots-container">
              <div className="slots">
                {availableSlots.map(slot => (
                  <div
                    key={slot}
                    id={`slot-${slot}`}
                    className={`bikeslot ${
                      selectedSlots.includes(slot) ? 'selected' :
                      bookedSlots.includes(slot) ? 'booked' : ''
                    }`}
                    onClick={() => handleSlotSelection(slot)}
                  >
                    {slot}
                  </div>
                ))}
              </div>
            </div>
            <div className="slot-status">
              <p>Available Slots: {availableSlots.length}</p>
              <p>Selected Slots: {selectedSlots.length}</p>
            </div>
            {selectedSlots.length > 0 && (
              <button onClick={handleButtonClick}>Receipt</button>
            )}
            {showReceipt && selectedSlots.length > 0 && <Receipt selectedSlots={selectedSlots} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default BikeSlot;
