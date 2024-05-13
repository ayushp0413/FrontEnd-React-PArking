/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Bikeslot.css'; // Import the CSS file for styling
import Navbar from '../Navbar/Navbar'; // Import the Navbar component if you have one

function BikeSlot() {
  // Initialize the state for available and selected slots
  const [availableSlots, setAvailableSlots] = useState(Array.from({ length: 36 }, (_, i) => i + 1));
  const [selectedSlots, setSelectedSlots] = useState([]);

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
  };

  return (
    <>
      <Navbar /> {/* If you have a Navbar component */}
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
                    className={`bikeslot ${selectedSlots.includes(slot) ? 'selected' : ''}`}
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
          </div>
        </div>
      </div>
    </>
  );
}

export default BikeSlot;
