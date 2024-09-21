import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { useEffect, useState } from "react";
import HeaderSection from "./HeaderSection";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import LandingPage from './LandingPage';
import Contact from './Contact';

function App() {

  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/data')  
      .then(response => {
        console.log(response.data);
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
          <Route path="/" element={<LandingPage data={data} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
         
        </Routes>

        

        </div>
       </Router> 

      
    </div>
  );
}

export default App;
