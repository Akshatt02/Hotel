import React from "react";
import { useNavigate } from "react-router-dom";
import "./rooms.css";

const rooms = [
	{
		name: "Deluxe Room",
		image: "/images/deluxe.jpg",
		description: "A cozy and luxurious space for relaxation. Perfect for travelers seeking comfort.",
		link: "/rooms/deluxe",
	},
	{
		name: "Club Room",
		image: "/images/club.jpg",
		description: "Modern and stylish, offering a perfect blend of comfort and elegance.",
		link: "/rooms/club",
	},
	{
		name: "Suite",
		image: "/images/suite.jpg",
		description: "A grand suite with high-end amenities for an exclusive experience.",
		link: "/rooms/suite",
	},
	{
		name: "Super Deluxe",
		image: "/images/royal-club.jpg",
		description: "An elite room offering the highest level of luxury and service.",
		link: "/rooms/super-deluxe",
	},
];

const Rooms = () => {
	const navigate = useNavigate();

	return (
		<div className="rooms-container">
			<h1 className="page-title">Rooms at Our Hotel</h1>
			<div className="rooms-grid">
				{rooms.map((room, index) => (
					<div key={index} className="room-card">
						<img src={room.image} alt={room.name} className="room-image" />
						<div className="room-details">
							<h2 className="room-title">{room.name}</h2>
							<p className="room-description">{room.description}</p>
							<button onClick={() => navigate(room.link)} className="room-btn">
								More Info
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Rooms;
