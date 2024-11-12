import logo from './logo.svg';
import './App.css';
import './styles/components/body.css';
import './styles/components/header.css';
import './styles/components/footer.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './pages/Home';
import Card from './components/Card';
import UserReportPage from './pages/UserReportPage';
function App() {
  return (
    <>
       <Router>
        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-report" element={<UserReportPage/>} />
          <Route path="/component" element={<Card/>} />
        </Routes>  
    </Router>
    </>
  );
}

export default App;
