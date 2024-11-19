import Sidebar from '../components/Sidebar';
import UserboardHeader from '../components/UserboardHeader';

import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import InstandBookingCard from '../components/InstandBookingCard';
import   Picklocation from '../assets/images/icons/location.svg';
function InstandBookingPage() {
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
                <li className='booking-menu-item  booking-active-menu'><Link to="/instand-booking" className='booking-menu-link'>Instant Booking</Link></li>
                    <li className='booking-menu-item'><Link to="/scheduled-booking" className='booking-menu-link'>Schedule Booking</Link></li>
                    <li className='booking-menu-item '><Link to="/complete-booking" className='booking-menu-link'>Completed</Link></li>
                    <li className='booking-menu-item'><Link to="/cancel-booking" className='booking-menu-link'>Canceled</Link></li>
                    <li className='booking-menu-item '><Link to="/pd-enquiry" className='booking-menu-link'>P & D Enquiry</Link></li>
                    <li className='booking-menu-item'><Link to="/service-enquiry" className='booking-menu-link'>Service Enquiry</Link></li>

                </ul>
             </div>
              

              <div className='booking-card-box' style={{maxWidth:'900px'}}>

              <div className='booking-box'>
                <p>Booking ID : 25SKS555</p>
                <p>Booking Date : 18 / 11 / 2024</p>
              </div>
                <div className='personal-table'>
              <table className="" style={{ }}>
                <tr  > <td className="personal-table-name" style={{fontSize:'18px'}}>Personal Details</td></tr>
  <tr>
    <td className="personal-table-name">
      <span>Name</span>
      <p>Sanjay Kumar . S</p>
    </td>
    <td className="personal-table-contact">
      <span>Mobile:</span>
      <p>96542584563</p>
    </td>
    <td className="personal-table-contact">
      <span>Email:</span>
      <p>Sivakarthikeyan.03@gmail.com</p>
    </td>
  </tr>
  <tr>
    <td colSpan="3" className="personal-table-address">
      <span>Address</span>
      <p style={{display:'flex',gap:'10px', alignItems:'center'}}>
        <img src={Picklocation} alt="Location Icon" style={{ width: '15px', height: '15px', marginRight: '5px' }} />
        No3/1, 1st street, west mambalam, chennai-33
      </p>
    </td>
  </tr>
  <tr>
    <td colSpan="3" className="personal-table-footer">
      <span>Description</span>
      <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.........
      </p>
    </td>
  </tr>
              </table>
              </div>


                 <div className='booking-grid-box'>
                    <InstandBookingCard/>
                 </div>
                 <div className='booking-box'>
                <p style={{color:'#B51144'}}>Total Amount</p>
                <p style={{color:'#B51144'}}>&#8377;
                 4,000</p>
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

export default InstandBookingPage
