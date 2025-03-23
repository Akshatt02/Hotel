import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        res.status(201).json({ message: "Booking saved successfully", booking });
    } catch (error) {
        res.status(500).json({ error: "Error saving booking" });
    }
};

export const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: "Error fetching bookings" });
    }
};