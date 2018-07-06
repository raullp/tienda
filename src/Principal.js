import React from 'react';
import Background from './images/main-fondo.jpg';
import './App.css';
import NavBar from './NavBar';

const Principal = () => (
  <div className="principal">
    <NavBar />
    <img src={Background} className="bg" alt="background" />
  </div>
);

export default Principal;