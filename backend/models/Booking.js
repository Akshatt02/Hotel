import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	phone: { type: String, required: true },
	roomType: { type: String, required: true },
	checkInDate: { type: Date, required: true },
	checkOutDate: { type: Date, required: true },
	paymentStatus: { type: String, default: "Pending" }
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
