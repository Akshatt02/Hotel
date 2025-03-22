import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./roomDetails.css";

const roomData = {
    deluxe: {
        name: "Deluxe Room",
        image: "/images/deluxe.jpg",
        description:
            "A cozy and luxurious space for relaxation. Perfect for travelers seeking comfort.",
    },
    club: {
        name: "Club Room",
        image: "/images/club.jpg",
        description:
            "Modern and stylish, offering a perfect blend of comfort and elegance.",
    },
    chamber: {
        name: "Chamber Room",
        image: "/images/chamber.jpg",
        description:
            "Spacious room with premium furnishings and an elegant ambiance.",
    },
    suite: {
        name: "Suite",
        image: "/images/suite.jpg",
        description:
            "A grand suite with high-end amenities for an exclusive experience.",
    },
    "super-deluxe": {
        name: "Super Deluxe",
        image: "/images/royal-club.jpg",
        description:
            "An elite room offering the highest level of luxury and service.",
    },
};

const RoomDetails = () => {
    const { roomType } = useParams();
    const navigate = useNavigate();
    const room = roomData[roomType];

    if (!room) {
        return <h2 className="error-message">Room not found!</h2>;
    }

    return (
        <div className="room-details-container">
            <img src={room.image} alt={room.name} className="room-details-image" />
            <h1 className="room-details-title">{room.name}</h1>
            <p className="room-details-description">{room.description}</p>

            <button className="book-now-btn" onClick={() => navigate(`/booking`)}>
                Book Now
            </button>
        </div>
    );
};

export default RoomDetails;
