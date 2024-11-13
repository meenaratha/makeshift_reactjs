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

function App() {
  return (
    <>
       <Router>
        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-report" element={<UserReportPage/>} />
          <Route path="/description" element={<ProductDescription/>} />
          <Route path="/component" element={<Card/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forgot" element={<ForgotPassword/>} />
          <Route path="/sign-in" element={<Signin/>} />
          <Route path="/otp-verification" element={<OtpVerification/>} />
          <Route path="/feedback" element={<FeedbackPopup/>} />
          <Route path="/list-of-services" element={<ListOfServices/>} />



        </Routes>  
    </Router>
    </>
  );
}

export default App;
