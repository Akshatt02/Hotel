import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-content">
        {/* Hotel Info */}
        <div className="footer-section">
          <h3>Hotel Vithal International, Prayagraj</h3>
          <p>22/1, Strachey Road, Civil Lines, Prayagraj - 211001</p>
          <p>📞 +91 12345 67890</p>
          <p>📧 contact@hotelvithal.com</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Rooms</a></li>
            <li><a href="#">Restaurants</a></li>
            <li><a href="#">Facilities</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2024 Hotel Vithal International, Prayagraj. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
