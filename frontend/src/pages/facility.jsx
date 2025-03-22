import React from "react";
import "./facilityPage.css"; // Import CSS file

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
          <img src="saloon-spa.jpg"/>
          <h3>Saloon & Spa</h3>
        </div>

        <div className="facility-box">
          <img src="bar.jpg"/>
          <h3>Bar</h3>
        </div>

        <div className="facility-box">
          <img src="board-room.jpg"/>
          <h3>Board Room</h3>
        </div>

        <div className="facility-box">
          <img src="banquet-hall.jpg"/>
          <h3>Banquet Hall</h3>
        </div>

        <div className="facility-box">
          <img src="gym.jpg"/>
          <h3>The Gym</h3>
        </div>

        <div className="facility-box">
          <img src="travel-desk.jpg"/>
          <h3>Travel Desk</h3>
        </div>
      </div>
    </div>
  );
}
