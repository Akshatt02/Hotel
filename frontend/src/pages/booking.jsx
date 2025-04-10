import React, { useState } from "react";
import "./booking.css";

const roomTypes = [
    { name: "Deluxe Room", price: 5000 },
    { name: "Club Room", price: 7000 },
    { name: "Suite Room", price: 10000 },
    { name: "Royal Club", price: 20000 },
];

const Booking = () => {
    const [step, setStep] = useState(1);
    const [rooms, setRooms] = useState([{ adults: 1, children: 0 }]);
    const [selectedRooms, setSelectedRooms] = useState({});
    const [guestInfo, setGuestInfo] = useState({ name: "", email: "", phone: "", gst: "", specialRequest: "" });
    const [dates, setDates] = useState({ checkIn: "", checkOut: "" });

    const addRoom = () => {
        setRooms([...rooms, { adults: 1, children: 0 }]);
    };

    const removeRoom = (index) => {
        if (rooms.length > 1) {
            setRooms(rooms.filter((_, i) => i !== index));
        }
    };

    const updateRoom = (index, field, value) => {
        const updatedRooms = [...rooms];
        updatedRooms[index][field] = value;
        setRooms(updatedRooms);
    };

    const handleDateChange = (e) => {
        setDates({ ...dates, [e.target.name]: e.target.value });
    };

    const handleRoomSelection = (roomName, quantity) => {
        const totalSelected = Object.values(selectedRooms).reduce((sum, num) => sum + num, 0);
        if (totalSelected < rooms.length || quantity < (selectedRooms[roomName] || 0)) {
            setSelectedRooms({ ...selectedRooms, [roomName]: quantity });
        }
    };

    const handleGuestChange = (e) => {
        setGuestInfo({ ...guestInfo, [e.target.name]: e.target.value });
    };

    const totalRoomsSelected = rooms.length;
    const totalAdults = rooms.reduce((sum, room) => sum + room.adults, 0);
    const totalChildren = rooms.reduce((sum, room) => sum + room.children, 0);
    const nights = dates.checkIn && dates.checkOut ? Math.max(Math.round((new Date(dates.checkOut) - new Date(dates.checkIn)) / (1000 * 60 * 60 * 24)), 1) : 1;

    const selectedRoomTypes = Object.entries(selectedRooms)
        .filter(([roomName, qty]) => qty > 0)
        .map(([roomName, qty]) => {
            const roomType = roomTypes.find((rt) => rt.name === roomName);
            return { ...roomType, qty };
        });

    const subtotal = selectedRoomTypes.reduce(
        (sum, room) => sum + room.price * room.qty * nights,
        0
    );
    const taxes = subtotal * 0.18;
    let grandTotal = subtotal + taxes;
    const discount = grandTotal * 0.05;
    grandTotal -= discount;

    const handleBooking = async () => {
        try {
            const payload = {
                name: guestInfo.name,
                email: guestInfo.email,
                phone: guestInfo.phone,
                roomType: selectedRoomTypes.map(({ name, qty }) => ({ name, qty })),
                adults: totalAdults,
                children: totalChildren,
                checkIn: dates.checkIn,
                checkOut: dates.checkOut,
                subtotal,
                taxes,
                grandTotal,
            };
            const backURL = import.meta.env.VITE_BACK_URL;
            const bookingResponse = await fetch(`${backURL}bookings/create`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            //yaha se dekhna hai wapas iske alawa sab badhiya chal raha hai
            const bookingData = await bookingResponse.json();
            const orderResponse = await fetch(`${backURL}payments/order`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    amount: grandTotal,
                    currency: "INR",
                    bookingId: bookingData.bookingId,
                }),
            });
            const orderData = await orderResponse.json();

            const options = {
                key: "YOUR_RAZORPAY_KEY_ID",
                amount: orderData.amount,
                currency: orderData.currency,
                name: "Hotel Booking",
                description: "Complete your payment",
                order_id: orderData.id,
                handler: async function (response) {
                    const verifyResponse = await fetch(`${backURL}payments/verify`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                        }),
                    });

                    const verifyResult = await verifyResponse.json();
                    if (verifyResult.success) {
                        alert("Payment successful! Booking confirmed.");
                    } else {
                        alert("Payment verification failed!");
                    }
                },
                prefill: {
                    name: guestInfo.name,
                    email: guestInfo.email,
                    contact: guestInfo.phone,
                },
                theme: { color: "#3399cc" },
            };
            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (error) {
            console.error("Error processing booking:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="booking-container">
            <h1 className="booking-title">Reservations</h1>

            {step === 1 && (
                <div className="booking-section">
                    <h2>1. Select Guests & Rooms</h2>
                    <div className="date-selection">
                        <label>From</label>
                        <input
                            type="date"
                            name="checkIn"
                            value={dates.checkIn}
                            onChange={handleDateChange}
                            min={new Date().toISOString().split("T")[0]}
                        />
                        <label>To</label>
                        <input
                            type="date"
                            name="checkOut"
                            value={dates.checkOut}
                            onChange={handleDateChange}
                            min={dates.checkIn || new Date().toISOString().split("T")[0]}
                        />
                    </div>

                    {rooms.map((room, index) => (
                        <div key={index} className="room-selection">
                            <label>Room {index + 1}</label>
                            <div className="guest-selection">
                                <span>Adults</span>
                                <button
                                    onClick={() =>
                                        updateRoom(index, "adults", Math.max(1, room.adults - 1))
                                    }
                                >
                                    -
                                </button>
                                <span>{room.adults}</span>
                                <button onClick={() => updateRoom(index, "adults", room.adults + 1)}>
                                    +
                                </button>

                                <span>Children</span>
                                <button
                                    onClick={() =>
                                        updateRoom(index, "children", Math.max(0, room.children - 1))
                                    }
                                >
                                    -
                                </button>
                                <span>{room.children}</span>
                                <button onClick={() => updateRoom(index, "children", room.children + 1)}>
                                    +
                                </button>
                            </div>
                            {rooms.length > 1 && (
                                <button
                                    className="remove-room-btn"
                                    onClick={() => removeRoom(index)}
                                >
                                    -
                                </button>
                            )}
                        </div>
                    ))}

                    <button className="add-room-btn" onClick={addRoom}>
                        + Add Another Room
                    </button>

                    <div className="promo-code">
                        <input type="text" placeholder="Promo Code (Optional)" />

                    </div>
                    <button
                        className="next-step"
                        onClick={() => setStep(2)}
                        disabled={!dates.checkIn || !dates.checkOut}
                    >
                        Next
                    </button>
                </div>
            )}

            {step === 2 && (
                <div className="booking-section">
                    <h2>2. Select {totalRoomsSelected} Room(s)</h2>
                    {roomTypes.map((room, index) => (
                        <div key={index} className="room-type">
                            <h3>{room.name}</h3>
                            <p>₹{room.price} per night</p>
                            <input
                                type="number"
                                min="0"
                                max={totalRoomsSelected}
                                value={selectedRooms[room.name] || 0}
                                onChange={(e) =>
                                    handleRoomSelection(
                                        room.name,
                                        parseInt(e.target.value) || 0
                                    )
                                }
                            />
                        </div>
                    ))}
                    <div className="navigation-buttons">
                        <button onClick={() => setStep(1)}>Back</button>
                        <button
                            disabled={
                                Object.values(selectedRooms).reduce((sum, qty) => sum + qty, 0) !== totalRoomsSelected
                            }
                            onClick={() => setStep(3)}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}

            {step === 3 && (
                <div className="booking-section guest-info-section">
                    <h2>3. Guest Information</h2>
                    <div className="guest-info-container">
                        <div className="guest-info-form">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={guestInfo.name}
                                onChange={handleGuestChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={guestInfo.email}
                                onChange={handleGuestChange}
                            />
                            <div className="phone-input">
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={guestInfo.phone}
                                    onChange={handleGuestChange}
                                />
                            </div>
                            <input
                                type="text"
                                name="gst"
                                placeholder="GST Number (Optional)"
                                value={guestInfo.gst}
                                onChange={handleGuestChange}
                            />
                            <textarea
                                name="specialRequest"
                                placeholder="Special Requests"
                                value={guestInfo.specialRequest}
                                onChange={handleGuestChange}
                            ></textarea>

                            <p className="last-step-message">
                                Last step remaining, book your stay now!
                            </p>
                            <p className="terms-text">
                                By completing this reservation you are accepting our{" "}
                                <a href="#">Terms & Conditions</a>
                            </p>
                            <div>
                                <button className="book-now-btn" onClick={handleBooking}>Book Now</button>
                            </div>
                            <div className="payment-icons">
                                <img src="/images/visa.jpg" alt="Visa" />
                                <img src="/images/mastercard.jpg" alt="MasterCard" />
                                <img src="/images/amex.jpg" alt="Amex" />
                                <img src="/images/netbanking.jpg" alt="Net Banking" />
                            </div>
                            <button className="back-btn" onClick={() => setStep(2)}>Back</button>
                        </div>

                        <div className="booking-summary">
                            <h3>
                                Check-In: <span>{dates.checkIn || "N/A"}</span>
                            </h3>
                            <h3>
                                Check-Out: <span>{dates.checkOut || "N/A"}</span>
                            </h3>
                            <h3>
                                No. of Nights: <span>{nights}</span>
                            </h3>
                            <h3>
                                Room Type:{" "}
                                <span>
                                    {Object.entries(selectedRooms)
                                        .filter(([name, qty]) => qty > 0)
                                        .map(([name, qty]) => `${qty} x ${name}`)
                                        .join(", ") || "N/A"}
                                </span>
                            </h3>
                            <h3>
                                Guests:{" "}
                                <span>
                                    {totalAdults} Adult{totalAdults > 1 ? "s" : ""},{" "}
                                    {totalChildren} Child{totalChildren !== 1 ? "ren" : ""}
                                </span>
                            </h3>
                            <div className="price-details">
                                <p>
                                    Subtotal: <span>₹{subtotal.toLocaleString()}</span>
                                </p>
                                <p>
                                    Taxes (18%): <span>₹{taxes.toLocaleString()}</span>
                                </p>
                                <p className="grand-total">
                                    Grand Total: <span>₹{grandTotal.toLocaleString()}</span>
                                </p>
                                <p className="pay-now">
                                    Pay Now: <span>₹{grandTotal.toLocaleString()}</span>
                                </p>
                            </div>
                            <p className="discount-message">
                                You are saving <span>₹{discount.toLocaleString()}</span> on this deal!
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Booking;
