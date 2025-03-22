import React, { useState } from "react";
import "./home.css";

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
      <div className="hero-section">
        <div className="hero-overlay"></div>


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
        <h2>ROOMS</h2>
        <div className="image-gallery">
          <img src={new URL('./image/club.JPG', import.meta.url).href} alt="Room Image" />
          <img src={new URL('./image/royal-club.JPG', import.meta.url).href} alt="Room Image" />
        </div>
      </div>

      <div className="text1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam deserunt quidem voluptatem officia eos similique quod officiis velit nam. At voluptate officia qui illum hic quam repellat pariatur assumenda explicabo.
        Lorem ipsum dolor
      </div>

      {/* Events Section */}
      <div className="section bg-white">
        <h2>EVENTS</h2>
        <div className="image-gallery">
          <img src={new URL('./image/suite.JPG', import.meta.url).href} alt="Room Image" />
          <img src={new URL('./image/deluxe.JPG', import.meta.url).href} alt="Room Image" />
        </div>
      </div>

      <div className="text1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam deserunt quidem voluptatem officia eos similique quod officiis velit nam. At voluptate officia qui illum hic quam repellat pariatur assumenda explicabo.
        Lorem ipsum dolor
      </div>

      {/* Restaurants Section */}s
      <div className="section bg-gray">
        <h2>RESTAURANTS</h2>
        <div className="image-gallery">
          <img src={new URL('./image/suite.JPG', import.meta.url).href} alt="Room Image" />
          <img src={new URL('./image/club.JPG', import.meta.url).href} alt="Room Image" />
        </div>
      </div>

      <div className="text1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam deserunt quidem voluptatem officia eos similique quod officiis velit nam. At voluptate officia qui illum hic quam repellat pariatur assumenda explicabo.
        Lorem ipsum dolor
      </div>

      <div className="section bg-gray">
        <h2>OTHER FACITLITIES</h2>
        <div className="image-gallery">
          <img src={new URL('./image/royal-club.JPG', import.meta.url).href} alt="Room Image" />
          <img src={new URL('./image/club.JPG', import.meta.url).href} alt="Room Image" />
        </div>
      </div>

      <div className="text1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam deserunt quidem voluptatem officia eos similique quod officiis velit nam. At voluptate officia qui illum hic quam repellat pariatur assumenda explicabo.
        Lorem ipsum dolor
      </div>

    </div>
  );
}