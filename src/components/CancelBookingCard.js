import Service_img from '../assets/images/service_list.jpg'
import {ReactComponent as Download } from '../assets/images/icons/download.svg';

function CancelBookingCard() {
  return (
    <>
       <div className='booking-grid-item'>
      <div class="user-service-card">
  <div class="user-service-card-header" style={{justifyContent:'normal' , gap:'10px', alignItems:'center'}}>
    <h2 class="user-service-title">Packer Service</h2>
    <span class="user-service-reviews" style={{fontSize:'12px'}}>(44k reviews)</span>
   
  </div>
  
  <div class="user-service-card-body" style={{marginBottom:'0px', paddingBottom:'10px !important'}}>
    <div class="user-service-info">
      <p>Working per day: <span class="user-price">₹ 900</span></p>
      {/* <p style={{color:'#B51144' , fontSize:'12px',fontWeight:'600'}}>View Details </p> */}
    </div>
    <div class="user-service-image complete-booking-image">
    <div class="user-service-rating">
      <span>★ 4.5</span>
    </div>
      <img src={Service_img} alt="Packer Service Image" />
      <button class="user-cancel-btn">Canceled</button>
    </div>
  </div>
  <div class="user-service-card-date" style={{ borderBottom:'none' }}>
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
    <ul class="booking-datas">
        <li><b>Mobile number : </b> 96542584563</li>
        <li><b>E-mail ID :</b>  Sivakarthikayan.03@gmail.com </li>
        <li><span className='bold-list'>Address : </span> 
        <div style={{display:'flex', alignItems:'center',gap:'7px',paddingTop:'5px'}}>
        <img src={Location} alt="" />
        <p>No3/1, 1street, west mambalam, chennai-33</p>
        </div>
        </li>
        <li><span className='bold-list'>Description :  </span> 
        <div style={{display:'flex', alignItems:'center',gap:'7px',paddingTop:'5px'}}>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
        </div>
        </li>
        {/* <li className='button-inline'>
            <div  className='amount-display'><p>Amount Spend  :</p> <span>&#8377;
              1,000</span></div>
            <button type="" className='download-btn'><Download /><p>Invoice Download</p></button>
        </li> */}
     </ul> 
   
  </div>
      </div>
      </div>
      <div className='booking-grid-item'>
      <div class="user-service-card">
  <div class="user-service-card-header" style={{justifyContent:'normal' , gap:'10px', alignItems:'center'}}>
    <h2 class="user-service-title">Packer Service</h2>
    <span class="user-service-reviews" style={{fontSize:'12px'}}>(44k reviews)</span>
   
  </div>
  
  <div class="user-service-card-body" style={{marginBottom:'0px', paddingBottom:'10px !important'}}>
    <div class="user-service-info">
      <p>Working per day: <span class="user-price">₹ 900</span></p>
      {/* <p style={{color:'#B51144' , fontSize:'12px',fontWeight:'600'}}>View Details </p> */}
    </div>
    <div class="user-service-image complete-booking-image">
    <div class="user-service-rating">
      <span>★ 4.5</span>
    </div>
      <img src={Service_img} alt="Packer Service Image" />
      <button class="user-cancel-btn">Canceled</button>
    </div>
  </div>
  <div class="user-service-card-date" style={{ borderBottom:'none' }}>
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
    <ul class="booking-datas">
        <li><b>Mobile number : </b> 96542584563</li>
        <li><b>E-mail ID :</b>  Sivakarthikayan.03@gmail.com </li>
        <li><span className='bold-list'>Address : </span> 
        <div style={{display:'flex', alignItems:'center',gap:'7px',paddingTop:'5px'}}>
        <img src={Location} alt="" />
        <p>No3/1, 1street, west mambalam, chennai-33</p>
        </div>
        </li>
        <li><span className='bold-list'>Description :  </span> 
        <div style={{display:'flex', alignItems:'center',gap:'7px',paddingTop:'5px'}}>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
        </div>
        </li>
        {/* <li className='button-inline'>
            <div  className='amount-display'><p>Amount Spend  :</p> <span>&#8377;
              1,000</span></div>
            <button type="" className='download-btn'><Download /><p>Invoice Download</p></button>
        </li> */}
     </ul> 
   
  </div>
      </div>
      </div>

      <div className='booking-grid-item'>
      <div class="user-service-card">
  <div class="user-service-card-header" style={{justifyContent:'normal' , gap:'10px', alignItems:'center'}}>
    <h2 class="user-service-title">Packer Service</h2>
    <span class="user-service-reviews" style={{fontSize:'12px'}}>(44k reviews)</span>
   
  </div>
  
  <div class="user-service-card-body" style={{marginBottom:'0px', paddingBottom:'10px !important'}}>
    <div class="user-service-info">
      <p>Working per day: <span class="user-price">₹ 900</span></p>
      {/* <p style={{color:'#B51144' , fontSize:'12px',fontWeight:'600'}}>View Details </p> */}
    </div>
    <div class="user-service-image complete-booking-image">
    <div class="user-service-rating">
      <span>★ 4.5</span>
    </div>
      <img src={Service_img} alt="Packer Service Image" />
      <button class="user-cancel-btn">Canceled</button>
    </div>
  </div>
  <div class="user-service-card-date" style={{ borderBottom:'none' }}>
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
    <ul class="booking-datas">
        <li><b>Mobile number : </b> 96542584563</li>
        <li><b>E-mail ID :</b>  Sivakarthikayan.03@gmail.com </li>
        <li><span className='bold-list'>Address : </span> 
        <div style={{display:'flex', alignItems:'center',gap:'7px',paddingTop:'5px'}}>
        <img src={Location} alt="" />
        <p>No3/1, 1street, west mambalam, chennai-33</p>
        </div>
        </li>
        <li><span className='bold-list'>Description :  </span> 
        <div style={{display:'flex', alignItems:'center',gap:'7px',paddingTop:'5px'}}>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
        </div>
        </li>
        {/* <li className='button-inline'>
            <div  className='amount-display'><p>Amount Spend  :</p> <span>&#8377;
              1,000</span></div>
            <button type="" className='download-btn'><Download /><p>Invoice Download</p></button>
        </li> */}
     </ul> 
   
  </div>
      </div>
      </div>


      <div className='booking-grid-item'>
      <div class="user-service-card">
  <div class="user-service-card-header" style={{justifyContent:'normal' , gap:'10px', alignItems:'center'}}>
    <h2 class="user-service-title">Packer Service</h2>
    <span class="user-service-reviews" style={{fontSize:'12px'}}>(44k reviews)</span>
   
  </div>
  
  <div class="user-service-card-body" style={{marginBottom:'0px', paddingBottom:'10px !important'}}>
    <div class="user-service-info">
      <p>Working per day: <span class="user-price">₹ 900</span></p>
      {/* <p style={{color:'#B51144' , fontSize:'12px',fontWeight:'600'}}>View Details </p> */}
    </div>
    <div class="user-service-image complete-booking-image">
    <div class="user-service-rating">
      <span>★ 4.5</span>
    </div>
      <img src={Service_img} alt="Packer Service Image" />
      <button class="user-cancel-btn">Canceled</button>
    </div>
  </div>
  <div class="user-service-card-date" style={{ borderBottom:'none' }}>
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
    <ul class="booking-datas">
        <li><b>Mobile number : </b> 96542584563</li>
        <li><b>E-mail ID :</b>  Sivakarthikayan.03@gmail.com </li>
        <li><span className='bold-list'>Address : </span> 
        <div style={{display:'flex', alignItems:'center',gap:'7px',paddingTop:'5px'}}>
        <img src={Location} alt="" />
        <p>No3/1, 1street, west mambalam, chennai-33</p>
        </div>
        </li>
        <li><span className='bold-list'>Description :  </span> 
        <div style={{display:'flex', alignItems:'center',gap:'7px',paddingTop:'5px'}}>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
        </div>
        </li>
        {/* <li className='button-inline'>
            <div  className='amount-display'><p>Amount Spend  :</p> <span>&#8377;
              1,000</span></div>
            <button type="" className='download-btn'><Download /><p>Invoice Download</p></button>
        </li> */}
     </ul> 
   
  </div>
      </div>
      </div>
    </>
  )
}

export default CancelBookingCard