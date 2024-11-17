import Sidebar from '../components/Sidebar';
import UserboardHeader from '../components/UserboardHeader';

import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ScheduledBookingCard from '../components/ScheduledBookingCard';

function ScheduledBookingPage() {
  return (
    <>
      <div className='wrapper'>
        <UserboardHeader/>
          <div className='container'>
            <div className='page-container'>
            <Sidebar/>
            <div className='page-body'>
             <div className='booking-menu-box'>
                <ul className='booking-menu-container'>
                <li className='booking-menu-item '><Link to="/instand-booking" className='booking-menu-link'>Instant Booking</Link></li>
                    <li className='booking-menu-item booking-active-menu'><Link to="/scheduled-booking" className='booking-menu-link'>Schedule Booking</Link></li>
                    <li className='booking-menu-item '><Link to="/complete-booking" className='booking-menu-link'>Completed</Link></li>
                    <li className='booking-menu-item'><Link to="/cancel-booking" className='booking-menu-link'>Canceled</Link></li>
                    <li className='booking-menu-item '><Link to="/pd-enquiry" className='booking-menu-link'>P & D Enquiry</Link></li>
                    <li className='booking-menu-item  '><Link to="/service-enquiry" className='booking-menu-link'>Service Enquiry</Link></li>


                </ul>
             </div>
              
              <div className='booking-card-box' style={{maxWidth:'900px'}}>
                 <div className='booking-grid-box'>
                  <ScheduledBookingCard/>
                 </div>
              </div>

            </div>
            </div>
            </div>
          <Footer/>
        </div>
    </>
  )
}

export default ScheduledBookingPage
