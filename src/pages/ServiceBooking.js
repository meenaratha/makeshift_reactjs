import Footer from '../components/Footer';
import UserboardHeader from '../components/UserboardHeader';
import Service_img from '../assets/images/service_list.jpg'
import ServiceBookingForm from '../components/ServiceBookingForm';
import '../styles/components/pages.css';
import React, { useState } from 'react';
import SlotNotes from '../components/SlotNotes';
function ServiceBooking() {

  const [showSlotNotes, setShowSlotNotes] = useState(false);

  const handleButtonClick = () => {
    setShowSlotNotes(true);
  };

  return (
    <div>
       <div className='wrapper'>
           
           <UserboardHeader/>
            <div className='page-wrapper'>
              <div className='container'>
              <div className='user-page-two-col-container'>
          <div className='user-page-item '>
          <div className='user-service-card-container'>
          <div class="user-service-card">
  <div class="user-service-card-header">
    <h2 class="user-service-title">Packer Service</h2>
    <span class="user-service-reviews">(44k reviews)</span>
   
  </div>
  
  <div class="user-service-card-body">
    <div class="user-service-info">
      <p>Working per day: <span class="user-price">₹ 900</span></p>
      <p>Working per Hour: <span class="user-price">₹ 200</span></p>
    </div>
    <div class="user-service-image">
    <div class="user-service-rating">
      <span>★ 4.5</span>
    </div>
      <img src={Service_img} alt="Packer Service Image" />
      <button class="user-add-btn">Add</button>
    </div>
  </div>
  
  <div class="user-service-card-footer">
    <ul class="user-service-description">
        <li>Responsible for selecting items from the warehouse shelves based on customer orders</li>
        <li>They use picking lists or handheld devices to find and gather the correct items</li>
     </ul> 
    <div className='user-details-link-box slot-book-box'>
    <a href="#" class="user-details-link">View Details</a>
    <button className='userReport-submitButton slot-book-btn' onClick={handleButtonClick}>Select Slot</button>
    
    {showSlotNotes && <SlotNotes onClose={() => setShowSlotNotes(false)} />}
    </div>
  </div>
    </div>
          </div>

          <div className='user-service-card-container' style={{marginTop:'20px'}}>
          <div class="user-service-card">
            <p className='user-service-note'>( Note: If you extend the working hours, you will be required to pay an additional amount for the extra hours )</p>
          </div>
          </div>
          </div>
           <div className='user-page-item service-booking-form-box'>
       <ServiceBookingForm/>
           </div>
        
          </div>

              </div>
            </div>

            <Footer/>
        </div>
     
    </div>
  )
}

export default ServiceBooking
