import React from 'react';
import Background from './images/main-fondo.jpg';
import './App.css';
import Catalogo from './Catalogo';
import NavBar from './NavBar';
import { Row } from 'reactstrap';

const Principal = () => (
  <div className="principal">
    <Row>
      <NavBar />
    </Row>
    <Row>
      <Catalogo />
    </Row>
    <img src={Background} className="bg" alt="background" />
  </div>
);

export default Principal;