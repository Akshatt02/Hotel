import React from "react";
import "./facility.css"; // Import CSS file

export default function FacilitiesPage() {
  return (
    <div className="facilities-container">
      {/* Main Heading with Golden Background */}
      <div className="facilities-header">
        <h1>FACILITIES</h1>
      </div>

      {/* Subheading */}
      <h2 className="facilities-subheading">
        Facilities at Hotel Vithal, Prayagraj
      </h2>

      {/* Facilities Box Layout */}
      <div className="facilities-grid">
        <div className="facility-box">
        <img src={new URL('./image/club.JPG', import.meta.url).href} alt="Room Image" />
          <h3>Saloon & Spa</h3>
        </div>

        <div className="facility-box">
        <img src={new URL('./image/club.JPG', import.meta.url).href} alt="Room Image" />
          <h3>Bar</h3>
        </div>

        <div className="facility-box">
        <img src={new URL('./image/club.JPG', import.meta.url).href} alt="Room Image" />
          <h3>Board Room</h3>
        </div>

        <div className="facility-box">
        <img src={new URL('./image/club.JPG', import.meta.url).href} alt="Room Image" />
          <h3>Banquet Hall</h3>
        </div>

        <div className="facility-box">
        <img src={new URL('./image/club.JPG', import.meta.url).href} alt="Room Image" />
          <h3>The Gym</h3>
        </div>

        <div className="facility-box">
        <img src={new URL('./image/club.JPG', import.meta.url).href} alt="Room Image" />
          <h3>Travel Desk</h3>
        </div>
      </div>
    </div>
  );
}

