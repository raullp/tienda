import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './NavBar.css';

import {
  Badge
} from 'reactstrap';

const CartBadge = ({ count }) => ( count > 0 ? <Badge color="danger" pill>{count}</Badge> : null);

const BodegaNavBar = ({ count, logout }) => (
  <div className="nav-bar">
    <span>La Bodega</span>
    <span className="pull-right">
      <Link to="/principal">
        <i className="fa fa-th"></i>
      </Link>
      <Link to="/cart">
        <span><CartBadge count={count} /><i className="fa fa-shopping-cart"></i></span>
      </Link>
      <Link to="/login">
        <i className="fa fa-sign-out"></i>
      </Link>
    </span>
  </div>
);

const mapStateToProps = ({ reducers: { cart }}) => ({
  count: cart.length,
});

export default connect(mapStateToProps)(BodegaNavBar);