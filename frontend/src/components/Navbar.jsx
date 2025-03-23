import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Hotel Vithal International</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rooms">Rooms</Link></li>
        <li><Link to ="/location">Location</Link></li>
        <li><Link to="/facilities">Facilities</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/booking" className="btn-booking">Book Now</Link></li>
    
      </ul>
    </nav>
  );
};

export default Navbar;
