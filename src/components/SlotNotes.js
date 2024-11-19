import React, { useEffect, useRef } from 'react';
function SlotNotes({ onClose }) {
    const modalRef = useRef();

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

  return (
    <>
      <div className='slot-model-popup'>
      <div class="slot-note-container"  ref={modalRef}>
  <h2 class="slot-note-title">Note</h2>
  <div class="slot-note-form">
    <div class="slot-note-group">
      <label for="service-method" class="slot-note-label">Select Service method</label>
      <select id="service-method" class="slot-note-select">
        <option disabled selected className='placeholder-option'>Select Service method</option>
        <option>Select Service method</option>
      </select>
    </div>
    <div class="slot-note-group">
      <label for="working-duration" class="slot-note-label">Select Working Duration</label>
      <select id="working-duration" class="slot-note-select">
        <option disabled selected className='placeholder-option'>Select Working Duration</option>
        <option>Select Service method</option>
      </select>
    </div>
    <div class="slot-note-group">
      <label for="service-time" class="slot-note-label">Preferred Service Time</label>
      <select id="service-time" class="slot-note-select">
        <option disabled selected className='placeholder-option'>Select Service Time</option>
        <option>Select Service method</option>
      </select>
    </div>
    <div class="slot-note-group">
      <label for="service-date" class="slot-note-label">Preferred Service Date</label>
      <select id="service-date" class="slot-note-select">
        <option disabled selected className='placeholder-option'>Select Service Date</option>
        <option>Select Service method</option>
      </select>
      <small class="slot-note-hint">*Pre booking available in after one month</small>
    </div>
  </div>
  <button class="slot-note-button">Save</button>
</div>
      </div>
    </>
  )
}

export default SlotNotes
