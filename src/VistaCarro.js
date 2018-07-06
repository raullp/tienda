import React from 'react';
import Background from './images/main-fondo.jpg';
import './App.css';
import Carro from './Carro';
import NavBar from './NavBar';
import { Row } from 'reactstrap';

const VistaCarro = ({ productos, total, pagar, cancelar, ...others }) => (
  <div className="principal">
    <Row>
      <NavBar />
    </Row>
    <Row className="content">
      <Carro {...others} />
    </Row>
    <img src={Background} className="bg" alt="background" />
  </div>
);

export default VistaCarro;
