import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      
      
      <div className="nav-left">
        <img src={logo} alt="Twende Tours Logo" className="logo" />
        <h2 className="brand-name">Twende Tours</h2>
      </div>

      
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About/Services</Link></li>
        <li><Link to="/book">Book Trip</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      
      <div className="nav-buttons">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
        <Link to="/signup">
          <button className="signup-btn">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
