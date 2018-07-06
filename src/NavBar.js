import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css';

import {
  Badge
} from 'reactstrap';

const BodegaNavBar = ({ count, logout }) => (
  <div className="nav-bar">
    <span>La Bodega</span>
    <span className="pull-right">
      <Link to="/">
        <i className="fa fa-th"></i>
      </Link>
      <Link to="/cart">
        <span>{ count && <Badge color="danger" pill>3</Badge>}<i className="fa fa-shopping-cart"></i></span>
      </Link>
      <Link to="/login">
        <i className="fa fa-sign-out"></i>
      </Link>
    </span>
  </div>
);

export default BodegaNavBar;