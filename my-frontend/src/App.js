import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import HeaderSection from "./HeaderSection";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import FAQ from "./FAQ";
import Contact from "./Contact"; 

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/data')  // Use the correct URL for your backend
      .then(response => {
        setData(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <Router>
      <div className="appContainer">
        <HeaderSection />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <h1>React Frontend</h1>
      <p>{data}</p>

        </div>
       </Router> 

      
    </div>
  );
}

export default App;
