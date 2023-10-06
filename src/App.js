import React,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Products from './Products';
import SellProductScreen from './SellProductScreen';
import { Dashboard } from './Dashboard';
import AddProducts from './AddProducts';
import LoginPage from './LoginPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle authentication (e.g., after successful login)
  const handleAuthentication = () => {
    setIsAuthenticated(true);
    console.log('its aunthenticated')
  };

  return (
    <Router>
      <div className="App">
      {!isAuthenticated && <LoginPage onAuthenticate={handleAuthentication} />}
        {isAuthenticated && <Navbar />}
        <Routes>
          <Route path="/AddProducts" element={<AddProducts/>} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/SellProductScreen" element={<SellProductScreen />} />
          {isAuthenticated && <Route path="/Dashboard" element={<Dashboard/>} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
