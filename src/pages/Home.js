import React from 'react';
import '../styles/components/popup.css';
import Herosection from '../components/Herosection';
import Services from '../components/Service';
import Footer from '../components/Footer';
import ProductSlider from '../components/ProductSlider';
import BannerCardSlider from '../components/BannerCardSlider';
import FactoryProductSlider from '../components/FactoryProductSlider';
import ShopSlider from '../components/ShopSlider';
import AdvBannerSlider from '../components/AdvBannerSlider';
import Personalslider from '../components/Personalslider';
import Tauter from '../components/Tauter';
import NotePopup from '../components/NotePopup';
import OtpPopup from '../components/OtpPopup';
import BookingConfirmPopup from '../components/BookingConfirmPopup';
import SuccessPopup from '../components/SuccessPopup';


function Home() {
  return (
    <>
      <div className='wrapper'>
        <Herosection/>
        <Services/>
        <ProductSlider/>
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
