import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

// Import Images
const clubImg = "/images/club.jpg";
const royalClubImg = "/images/royal-club.jpg";
const suiteImg = "/images/suite.jpg";
const deluxeImg = "./images/deluxe.jpg";

export default function BookingPage() {
	const navigate = useNavigate();

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

	const handleBookingClick = () => {
		navigate("/booking");
	};

	return (
		<div>
			{/* Hero Section */}
			<div className="hero-section">
				<div className="hero-overlay"></div>

				{/* Booking Form */}
				<div className="booking-form">
					<h2>Book Your Stay</h2>

					<label>Check In</label>
					<input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} />

					<label>Check Out</label>
					<input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} />

					<label>Adults</label>
					<input type="number" name="adults" min="1" value={formData.adults} onChange={handleChange} />

					<label>Children</label>
					<input type="number" name="children" min="0" value={formData.children} onChange={handleChange} />

					<label>Rooms</label>
					<input type="number" name="rooms" min="1" value={formData.rooms} onChange={handleChange} />

					<label>Promo Code</label>
					<input type="text" name="promoCode" value={formData.promoCode} onChange={handleChange} />

					<button onClick={handleBookingClick}>Book Now</button>
				</div>
			</div>

			{/* Rooms Section */}
			<div className="section bg-gray">
				<h2>ROOMS</h2>
				<div className="image-gallery">
					<img src={clubImg} alt="Club Room" />
					<img src={royalClubImg} alt="Royal Club Room" />
				</div>
			</div>

			<div className="text1">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam deserunt quidem voluptatem officia eos.
			</div>

			{/* Events Section */}
			<div className="section bg-white">
				<h2>EVENTS</h2>
				<div className="image-gallery">
					<img src={suiteImg} alt="Suite Room" />
					<img src={deluxeImg} alt="Deluxe Room" />
				</div>
			</div>

			<div className="text1">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam deserunt quidem voluptatem officia eos.
			</div>

			{/* Restaurants Section */}
			<div className="section bg-gray">
				<h2>RESTAURANTS</h2>
				<div className="image-gallery">
					<img src={suiteImg} alt="Suite Room" />
					<img src={clubImg} alt="Club Room" />
				</div>
			</div>

			<div className="text1">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam deserunt quidem voluptatem officia eos.
			</div>

			{/* Other Facilities Section */}
			<div className="section bg-gray">
				<h2>OTHER FACILITIES</h2>
				<div className="image-gallery">
					<img src={royalClubImg} alt="Royal Club Room" />
					<img src={clubImg} alt="Club Room" />
				</div>
			</div>

			<div className="text1">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam deserunt quidem voluptatem officia eos.
			</div>
		</div>
	);
}
