import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom

function SlotNotes({ onClose }) {
  const modalRef = useRef();
  const navigate = useNavigate();  // Initialize the navigate function
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  // Set current date and time on component mount
  useEffect(() => {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    
    // Formatting current time and date
    setCurrentTime(`${hours}:${minutes < 10 ? '0' + minutes : minutes}`);
    setCurrentDate(today.toISOString().split('T')[0]); // YYYY-MM-DD format

  }, []);

  // Close modal if clicking outside the .slot-note-container
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(); // Close the modal if clicking outside the container
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  // Handle the save button click
  const handleSave = () => {
    // You can perform any logic here if needed before navigating
    navigate('/service-booking');  // Redirect to the desired page
  };

  return (
    <>
      <div className='slot-model-popup'>
        <div className="slot-note-container" ref={modalRef}>
          <h2 className="slot-note-title">Note</h2>
          <div className="slot-note-form">
            <div className="slot-note-group">
              <label htmlFor="service-method" className="slot-note-label">Select Service method</label>
              <select id="service-method" className="slot-note-select">
                <option disabled selected className='placeholder-option'>Select Service method</option>
                <option>Select Service method</option>
              </select>
            </div>
            <div className="slot-note-group">
              <label htmlFor="working-duration" className="slot-note-label">Select Working Duration</label>
              <select id="working-duration" className="slot-note-select">
                <option disabled selected className='placeholder-option'>Select Working Duration</option>
                <option>Select Service method</option>
              </select>
            </div>
            <div className="slot-note-group">
              <label htmlFor="service-time" className="slot-note-label">Preferred Service Time</label>
              <input
                type="time"
                id="service-time"
                className="slot-note-select"
                min={currentTime} // Prevent selecting past times
                required
              />
            </div>
            <div className="slot-note-group">
              <label htmlFor="service-date" className="slot-note-label">Preferred Service Date</label>
              <input
                type="date"
                id="service-date"
                className="slot-note-select"
                min={currentDate} // Prevent selecting past dates
                required
              />
              <small className="slot-note-hint">*Pre-booking available after one month</small>
            </div>
          </div>
          <button className="slot-note-button" onClick={handleSave}>Save</button> {/* Trigger handleSave on click */}
        </div>
      </div>
    </>
  );
}

export default SlotNotes;
