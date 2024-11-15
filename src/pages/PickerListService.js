import React from 'react'
import UserboardHeader from '../components/UserboardHeader';
import Footer from '../components/Footer';
import Service_img from '../assets/images/service_list.jpg'

function PickerListService() {
  return (
    <>
       <div className='wrapper'>
           
           <UserboardHeader/>
            <div className='page-wrapper'>
              <div className='container'>
               <div className='picker-service-box'>
                   <div className='picker-service-card-box'>
                      <div className='picker-service-card-head'>
                        <h2>List Of Service</h2>
                        </div>

                        <div className='picker-service-grid-box'>
                        <div class="user-service-card">
  <div class="user-service-card-header">
    <h2 class="user-service-title">Packer Service</h2>
    <span class="user-service-reviews" style={{fontSize:'10px'}}>(44k reviews)</span>
   
  </div>
  
  <div class="user-service-card-body" style={{marginBottom:'0px', paddingBottom:'10px !important'}}>
    <div class="user-service-info">
      <p>Working per day: <span class="user-price">₹ 900</span></p>
      <p style={{color:'#B51144' , fontSize:'12px',fontWeight:'600'}}>View Details </p>
    </div>
    <div class="user-service-image">
    <div class="user-service-rating">
      <span>★ 4.5</span>
    </div>
      <img src={Service_img} alt="Packer Service Image" />
    </div>
  </div>
  <div class="user-service-card-date">
   <div class="user-service-card-date-item">
     <span>Date : </span>
     <p>August 24 2024</p>
  </div>
  <div class="user-service-card-date-item">
     <span>Time : </span>
     <p>12 : 00 pm</p>
  </div>
  <div class="user-service-card-date-item">
     <span>Working Days :</span>
     <p>1 Days</p>
  </div>
  </div>
  <div class="user-service-card-footer" style={{paddingTop:'10px'}}>
    <ul class="user-service-description">
        <li>Responsible for selecting items from the warehouse shelves based on customer orders</li>
        <li>They use picking lists or handheld devices to find and gather the correct items</li>
     </ul> 
   
  </div>
                        </div>
                        <div class="user-service-card">
  <div class="user-service-card-header">
    <h2 class="user-service-title">Packer Service</h2>
    <span class="user-service-reviews" style={{fontSize:'10px'}}>(44k reviews)</span>
   
  </div>
  
  <div class="user-service-card-body" style={{marginBottom:'0px', paddingBottom:'10px !important'}}>
    <div class="user-service-info">
      <p>Working per day: <span class="user-price">₹ 900</span></p>
      <p style={{color:'#B51144' , fontSize:'12px',fontWeight:'600'}}>View Details </p>
    </div>
    <div class="user-service-image">
    <div class="user-service-rating">
      <span>★ 4.5</span>
    </div>
      <img src={Service_img} alt="Packer Service Image" />
    </div>
  </div>
  <div class="user-service-card-date">
   <div class="user-service-card-date-item">
     <span>Date : </span>
     <p>August 24 2024</p>
  </div>
  <div class="user-service-card-date-item">
     <span>Time : </span>
     <p>12 : 00 pm</p>
  </div>
  <div class="user-service-card-date-item">
     <span>Working Days :</span>
     <p>1 Days</p>
  </div>
  </div>
  <div class="user-service-card-footer" style={{paddingTop:'10px'}}>
    <ul class="user-service-description">
        <li>Responsible for selecting items from the warehouse shelves based on customer orders</li>
        <li>They use picking lists or handheld devices to find and gather the correct items</li>
     </ul> 
   
  </div>
                        </div>

                        
                        </div>
                   </div>
                   <div className='picker-payment-box'>
                   <div className='payment-box'>
                      <div className='payment-item'>
                        <h2>Service summary</h2>
                        <ul className='payment-item-list-box'>
                            <li className='payment-item-list-item'>
                                <p>Picker Service</p>

                                <p className='wrap-par'>
                                    <span>Working per day :</span>
                                    <span style={{color:'#B51144'}}>&#8377; 1,000</span>
                                
                                </p>
                            </li>

                            <li className='payment-item-list-item'>
                                <p>Packer Service</p>

                                <p className='wrap-par'>
                                    <span>Working per day :</span>
                                    <span style={{color:'#B51144'}}>&#8377; 1,000</span>
                                
                                </p>
                            </li>
                        </ul>
                        
                       
                      </div>

                      <div className='payment-item'>
                      <ul className='payment-item-list-box'>
                      <h2>Payment summary</h2>
                            <li className='payment-item-list-item'>
                                <p>Item total</p>

                                <p className='wrap-par'>
                                    
                                    <span style={{color:'#B51144'}}>&#8377; 100</span>
                                
                                </p>
                            </li>

                            <li className='payment-item-list-item'>
                                <p>Taxes and Fee</p>

                                <p className='wrap-par'>
                                  
                                    <span style={{color:'#B51144'}}>&#8377; 2,000</span>
                                
                                </p>
                            </li>
                        </ul>
                      </div>
                      <div className='payment-item'>
                      <ul className='payment-item-list-box'>
                            <li className='payment-item-list-item last' >
                                <p style={{fontSize:'20px'}}>Amount to pay</p>

                                <p className='wrap-par' style={{fontSize:'20px'}}>
                                  
                                    <span style={{color:'#B51144'}}>&#8377; 2,100</span>
                                
                                </p>
                            </li>

                            
                            <div className='button-inline' style={{justifyContent:'center'}}>
               <button className='primary-button'>Pay Now </button>
            </div>
                           
                        </ul>
                      </div>
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

export default PickerListService
