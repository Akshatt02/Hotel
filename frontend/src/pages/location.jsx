import React, { useState, useEffect } from "react";
import "./Location.css";

const Location = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [distance, setDistance] = useState(null);

  const hotelCoords = { lat: 25.4358, lng: 81.8463 }; // Vitthal International Hotel, Prayagraj

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userCoords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(userCoords);
          calculateDistance(userCoords, hotelCoords);
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    } else {
      console.error("Geolocation not supported by this browser.");
    }
  }, []);

  const calculateDistance = (start, end) => {
    const R = 6371; // Radius of Earth in km
    const dLat = (end.lat - start.lat) * (Math.PI / 180);
    const dLng = (end.lng - start.lng) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(start.lat * (Math.PI / 180)) *
        Math.cos(end.lat * (Math.PI / 180)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    setDistance(distance.toFixed(2)); // Convert to 2 decimal places
  };

  return (
    <div className="location-container">
      <h1>Our Location</h1>
      <p className="description">
        Welcome to <b>Vitthal International Hotel</b>, located in the heart of Prayagraj.
      </p>

      <div className="location-details">
        <div className="address">
          <h2>Address</h2>
          <p>Vitthal International Hotel,</p>
          <p>Prayagraj, Uttar Pradesh, India</p>
          <p>📍 Near Railway Station</p>
          <p>📞 Contact: +91 9876543210</p>
        </div>

        <div className="map">
          <iframe
            title="Vitthal Hotel Location"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&q=Vitthal+International+Hotel,Prayagraj"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="distance-info">
        <h2>Find Your Distance to Us</h2>
        {userLocation ? (
          <p>Your current location: 📍 {userLocation.lat}, {userLocation.lng}</p>
        ) : (
          <p>Fetching your location...</p>
        )}
        {distance && <p>🚗 You are <b>{distance} km</b> away from us!</p>}
      </div>
    </div>
  );
};

export default Location;
