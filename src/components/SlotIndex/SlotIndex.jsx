/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './SlotIndex.css'; // Import the CSS file for styling
import Navbar from '../Navbar/Navbar'; // Import the Navbar component if you have one

function SlotIndex() {
  // Initialize the state for available and selected slots
  const [availableSlots, setAvailableSlots] = useState(Array.from({ length: 32 }, (_, i) => i + 1));
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [showReceipt, setShowReceipt] = useState(false);

  // Function to handle slot selection
  const handleSlotSelection = (slot) => {
    if (selectedSlots.includes(slot)) {
      // Deselect the slot if already selected
      setSelectedSlots(selectedSlots.filter(selectedSlot => selectedSlot !== slot));
    } else {
      // Select the slot permanently
      setSelectedSlots([...selectedSlots, slot]);
    }
  };

  // Function to handle button click
  const handleButtonClick = () => {
    // Perform action when button is clicked
    console.log('Receipt button clicked!');
    setShowReceipt(true);
  };

  // Function to calculate total price
  const calculateTotalPrice = () => {
    return selectedSlots.length * 60; // Assuming each slot costs 60 INR
  };

  // Function to render receipt details
  const renderReceipt = () => {
    if (showReceipt && selectedSlots.length > 0) {
      return (
        <div className="receipt">
          <h3>Receipt</h3>
          <p>Number of Slots Booked: {selectedSlots.length}</p>
          <p>Selected Slots: {selectedSlots.join(', ')}</p>
          <p>Total Price: {calculateTotalPrice()} INR</p>
          <button>Pay</button>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <Navbar /> {/* If you have a Navbar component */}
      <div className="center-container">
        <div className="max-width-container">
          <div className="parking-management-system">
            <h2>Car Parking</h2>
            <div className="slots-container">
              <div className="slots">
                {availableSlots.map(slot => (
                  <div
                    key={slot}
                    id={`slot-${slot}`}
                    className={`slot ${selectedSlots.includes(slot) ? 'selected' : ''}`}
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
            {renderReceipt()}
          </div>
        </div>
      </div>
    </>
  );
}

export default SlotIndex;

