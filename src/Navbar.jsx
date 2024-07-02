import React from 'react';
import { Link } from 'react-router-dom';
import "./Form.css";

export function Navbar_login() {
  return (
    <nav>
      <h1>Green Route</h1>
      <Link to="/signin"><button className='dashboard-button'>Dashboard</button></Link>
    </nav>
  );
}

export function Navbar_dashboard() {
  return (
    <nav>
      <h1>Green Route</h1>
      <button className="log-in">Cart</button>
      <button className="sign-in circle">👤</button>
    </nav>
  );
}
