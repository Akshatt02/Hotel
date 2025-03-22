import React, { useState } from "react";
import "./BookingPage.css"; // Import CSS file

export default function BookingPage() {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
    rooms: 1,
    promoCode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Background Image with Overlay */}
      <div className="hero-section" style={{ backgroundImage: "url('your-image-url.jpg')" }}>
        <div className="hero-overlay"></div>

        {/* Hotel Description */}
        <div className="hero-content">
          <h1>A Royal Stay at Hotel Vithal</h1>
          <p>
            Welcome to Prayagraj, one of the most ancient cities in India, known for its pilgrimage
            sites and cultural heritage. Hotel Kanha Shyam offers you a luxurious retreat near
            Prayagraj High Court, ensuring a comfortable and relaxing stay.
          </p>
        </div>

        {/* Booking Form */}
        <div className="booking-form">
          <h2>Book Your Stay</h2>

          {/* First Row: Check-in and Check-out */}
          <label>Check In</label>
          <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} />

          <label>Check Out</label>
          <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} />

          {/* Second Row: Adults and Children */}
          <label>Adults</label>
          <input type="number" name="adults" min="1" value={formData.adults} onChange={handleChange} />

          <label>Children</label>
          <input type="number" name="children" min="0" value={formData.children} onChange={handleChange} />

          {/* Third Row: Rooms */}
          <label>Rooms</label>
          <input type="number" name="rooms" min="1" value={formData.rooms} onChange={handleChange} />

          {/* Promo Code Field */}
          <label>Promo Code</label>
          <input type="text" name="promoCode" value={formData.promoCode} onChange={handleChange} />

          {/* Book Now Button */}
          <button>Book Now</button>
        </div>
      </div>

      {/* Rooms Section */}
      <div className="section bg-gray">
        <h2 color="blue">ROOMS</h2>
        <div className="image-gallery">
          <img src="room1.jpg"/>
          <img src="room2.jpg"/>
        </div>
      </div>

      {/* Events Section */}
      <div className="section bg-white">
        <h2>EVENTS</h2>
        <div className="image-gallery">
          <img src="event1.jpg"/>
          <img src="event2.jpg"/>
        </div>
      </div>

      {/* Restaurants Section */}
      <div className="section bg-gray">
        <h2>RESTAURANTS</h2>
        <div className="image-gallery">
          <img src="restaurant1.jpg"/>
          <img src="restaurant2.jpg"/>
        </div>
      </div>

      <div className="section bg-gray">
        <h2>OTHER FACITLITIES</h2>
        <div className="image-gallery">
          <img src="facility1.jpg"/>
          <img src="facility2.jpg"/>
        </div>
      </div>

    </div>
  );
}
