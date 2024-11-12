import '../styles/components/header.css';
import HomeLogo from '../assets/logo/header_logo.jpg';
import ProfilePic from '../assets/images/profile_pic.jpg';
import React, { useState, useEffect, useRef } from 'react'; // Only one import for React
import { Link } from 'react-router-dom';
function UserboardHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // State for sticky header
  const mobilePanelRef = useRef(null);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Detect clicks outside the mobile panel
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobilePanelRef.current && !mobilePanelRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false); // Close the mobile menu
      }
    };

    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobilePanelRef]);

  // Function to check scroll position and set sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
       <header className={isSticky ? 'sticky-header' : ''}>
        <div className='header-box z-index'>
          <div className='container'>
            <div className='header-bg'>
             
              <div className='logo-box'>
                <a href=''><img src={HomeLogo} alt="Home Logo" /></a>
              </div>
              {/* NAVIBAR */}
              <ul className='navibar desktop-menu-box'>
                <li className='menu-link-box'>
                  <Link to="#" className="menu-link">Home</Link>
                </li>
                <li className='menu-link-box'>
                  <Link to="#" className="menu-link">Categories</Link>
                </li>
                <li className='menu-link-box'>
                  <Link to="#" className="menu-link">Booking History</Link>
                </li>
              </ul>

              <ul className='navibar mobile-menu-box'>
                <button className='mobileMenu-open' onClick={toggleMobileMenu}>
                  <i className="material-icons">menu</i>
                </button>
                {isMobileMenuOpen && (
                  <ul className='mobile-panel' ref={mobilePanelRef}>
                    <li className='menu-link-box'>
                      <i className="material-icons">home</i>
                      <Link to="#" className="menu-link">Home</Link>
                    </li>
                    <li className='menu-link-box'>
                      <i className="material-icons">category</i>
                      <Link to="#" className="menu-link">Categories</Link>
                    </li>
                    <li className='menu-link-box'>
                      <i className="material-icons">calendar_today</i>
                      <Link to="#" className="menu-link">Booking History</Link>
                    </li>
                  </ul>
                )}
              </ul>

              <ul className='navibar'>
                
                <li className='menu-link-box '>
                  <Link to="#" className="menu-link location-menu">
                    <span className="material-icons">location_on</span>
                    <span className='location-text'>West Mambalam, Chennai</span>
                    <span className="material-icons">expand_more</span>
                  </Link>
                </li>
                <li className='menu-link-box'>
                  <Link to="#" className="menu-link notification-menu">
                    <span className="material-icons">notifications</span>
                    <div className='small-dot'></div>
                  </Link>
                </li>
                <li className='menu-link-box'>
                  <Link to="#" className="menu-link cart-menu">
                    <span className="material-icons">shopping_basket</span>
                  </Link>
                </li>
                <li className='menu-link-box'>
                  <Link to="#" className="menu-link search-menu">
                    <span className="material-icons">search</span>
                  </Link>
                </li>

                <li className='menu-link-box '>
                  <button to="#" className="menu-link user-login">
                     <img src={ProfilePic} alt="" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <ul className="footer-mobile-panel" ref={mobilePanelRef}>
      <li className="menu-link-box">
        <i className="material-icons">home</i>
        <Link to="#" className="menu-link">Home</Link>
      </li>
      <li className="menu-link-box">
        <i className="material-icons">category</i>
        <Link to="#" className="menu-link">Categories</Link>
      </li>
      <li className="menu-link-box">
        <i className="material-icons">calendar_today</i>
        <Link to="#" className="menu-link">Booking History</Link>
      </li>
    </ul>
    </>
  )
}

export default UserboardHeader
