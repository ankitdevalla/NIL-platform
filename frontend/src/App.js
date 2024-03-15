import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login'; // Adjust this import path to where your Login component is located
import Home from './components/home'; // home component
import SignUp from './components/signup'; // signup
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page route */}
          <Route path="/login" element={<Login />} /> {/* Login page route */}
          <Route path="/signup" element={<SignUp />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
