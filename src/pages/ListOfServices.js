import React from 'react'
import UserHerobanner from '../components/UserHerobanner'
import Services from '../components/Service';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

function ListOfServices() {
  return (
    <>
        <div className='wrapper'>
            <UserHerobanner/>
            <Services/>
            <div className='page-wrapper'>
              <div className='container'>
              <div className='user-page-container'>
          <div className='user-page-item'>

          </div>
           <div className='user-page-item'>
            <ServiceCard/>
           </div>
        <div className='user-page-item'></div>
          </div>

              </div>
            </div>

            <Footer/>
        </div>
     
    </>
  )
}

export default ListOfServices
