import '../styles/components/popup.css';
import Herosection from '../components/Herosection';
import Services from '../components/Service';
import Footer from '../components/Footer';
import ProductSlider from '../components/ProductSlider';
import ProductDescription from '../components/ProductDescription';

import BannerCardSlider from '../components/BannerCardSlider';
import FactoryProductSlider from '../components/FactoryProductSlider';
import ShopSlider from '../components/ShopSlider';
import AdvBannerSlider from '../components/AdvBannerSlider';
import Personalslider from '../components/Personalslider';
import Tauter from '../components/Tauter';
// import NotePopup from '../components/NotePopup';
// import OtpPopup from '../components/OtpPopup';
// import BookingConfirmPopup from '../components/BookingConfirmPopup';
// import SuccessPopup from '../components/SuccessPopup';
// import feedback from '../components/FeedbackPopup';


import React, { useState } from 'react';
function Home() {

  const [showDescription, setShowDescription] = useState(false); // Shared state for visibility

  const handleViewClick = () => {
    setShowDescription(true); // Show the description component
  };

  const handleCloseClick = () => {
    setShowDescription(false); // Hide the description component
  };

  return (
    <>
      <div className='wrapper'>
       
        <Herosection/>
        <Services/>
        <ProductSlider onViewClick={handleViewClick}   />
      {showDescription && <ProductDescription onCloseClick={handleCloseClick} />}
       <BannerCardSlider/>
       <FactoryProductSlider/>
       <ShopSlider/>
       <AdvBannerSlider/>

       <Personalslider/>
       <Tauter/>
        <Footer/>
     
      </div>
      
    </>
  )
}

export default Home
