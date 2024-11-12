import React from 'react'
import '../styles/components/sidebar.css';
import { Link } from 'react-router-dom';
import { ReactComponent as EditProfile } from '../assets/images/mingcute_user-edit-fill.svg';
import { ReactComponent as BookHistory } from '../assets/images/mdi_book-cog.svg';
import { ReactComponent as Notification } from '../assets/images/tabler_bell-filled.svg';
import { ReactComponent as Password } from '../assets/images/teenyicons_password-solid.svg';
import { ReactComponent as Policy } from '../assets/images/ic_round-policy.svg';
import { ReactComponent as Report } from '../assets/images/ic_baseline-report.svg';
import { ReactComponent as DeleteAccount } from '../assets/images/fluent_person-delete-20-filled.svg';



function Sidebar() {
  return (
      <>
      <div className='overlay overlay-hide'>
      <div class="userboard-sidebar">
     <div class="userboard-inner-sidebar">
    <button type="" className='sidebar-back-btn'><i className="material-icons">arrow_back</i>
    </button>
    <div class="userboard-profile-image-container">
        <img src="https://i.ibb.co/4Jb8wdS/b0cdee9459cd4162b58b0bbac45e6085.jpg" alt="Profile" class="userboard-profile-image" />
    </div>
    <div class="userboard-username">Nimmi</div>

    <ul class="user-board">
        <li className='userboard-menu-list'>
            <Link to="" className='userboard-link'>
            <EditProfile className="userboard-menu-icon" />
            <span>Edit Profile</span></Link>    
        </li>
        <li className='userboard-menu-list'>
        <Link to="" className='userboard-link'>
            <BookHistory  className="userboard-menu-icon" />
            <span>Booking History</span>
            </Link>
        </li>
        <li className='userboard-menu-list'>
        <Link to="" className='userboard-link'>
            <Notification  className="userboard-menu-icon" />
            <span>Notification</span>
            </Link>
        </li>
        <li className='userboard-menu-list'>
        <Link to="" className='userboard-link'>
            <Password  className="userboard-menu-icon" />
            <span>Change Password</span>
            </Link>
        </li>
        <li className='userboard-menu-list'>
        <Link to="" className='userboard-link'>
            <Policy   className="userboard-menu-icon" />
            <span>Privacy Policy</span>
            </Link>
        </li>
        <li className='userboard-menu-list'>
        <Link to="" className='userboard-link'>
            <Report  className="userboard-menu-icon" />
            <span>Report & Queries</span>
            </Link>
        </li>
        <li className='userboard-menu-list'>
        <Link to="" className='userboard-link'>
            <DeleteAccount  className="userboard-menu-icon" />
            <span>Delete Account</span>
            </Link>
        </li>
    </ul>
    </div>
    </div>
      </div>
    
      </>
      
   
  )
}

export default Sidebar
