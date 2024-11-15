import logo from './logo.svg';
import './App.css';
import './styles/components/body.css';
import './styles/components/header.css';
import './styles/components/footer.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './pages/Home';
import Card from './components/Card';
import UserReportPage from './pages/UserReportPage';
import ProductDescription from './components/ProductDescription';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Signin from './components/Signin';
import OtpVerification from './components/OtpVerification';
import FeedbackPopup from './components/FeedbackPopup';
import ListOfServices from './pages/ListOfServices';
import ServiceBooking from './pages/ServiceBooking';
import ListOfServiceBooking from './pages/ListOfServiceBooking';
import PickerListService from './pages/PickerListService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Notification from './pages/Notification';
import PasswordChange from './pages/PasswordChange';
import UserEditPage from './pages/UserEditPage';
import UserHome from './pages/UserHome';
import InstandBookingPage from './pages/InstandBookingPage';
import ScheduledBookingPage from './pages/ScheduledBookingPage';
import PDEnquiryPage from './pages/PDEnquiryPage';
import ServiceEnquiryPage from './pages/ServiceEnquiryPage';

function App() {
  return (
    <>
       <Router>
        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-home" element={<UserHome />} />

          <Route path="/user-edit" element={<UserEditPage/>} />
          <Route path="/instand-booking" element={<InstandBookingPage/>} />
          <Route path="/scheduled-booking" element={<ScheduledBookingPage/>} />
          <Route path="/pd-enquiry" element={<PDEnquiryPage/>} />
          <Route path="/service-enquiry" element={<ServiceEnquiryPage/>} />



          <Route path="/notification" element={<Notification/>} />
          <Route path="/change-password" element={<PasswordChange/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />

         <Route path="/user-report" element={<UserReportPage/>} />
          <Route path="/description" element={<ProductDescription/>} />
          <Route path="/component" element={<Card/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forgot" element={<ForgotPassword/>} />
          <Route path="/sign-in" element={<Signin/>} />
          <Route path="/otp-verification" element={<OtpVerification/>} />
          <Route path="/feedback" element={<FeedbackPopup/>} />
          <Route path="/list-of-services" element={<ListOfServices/>} />
          <Route path="/service-booking" element={<ServiceBooking/>} />
          <Route path="/list-of-service-booking" element={<ListOfServiceBooking/>} />
          <Route path="/picker-service-booking" element={<PickerListService/>} />





        </Routes>  
    </Router>
    </>
  );
}

export default App;
