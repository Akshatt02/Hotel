import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    roomType: [{ name: String, qty: Number }],
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    subtotal: { type: Number, required: true },
    taxes: { type: Number, required: true },
    grandTotal: { type: Number, required: true },
    adults: { type: Number, required: true },
    children: { type: Number, required: true },
    paymentStatus: { type: String, default: "Pending" },
    razorpay_order_id: { type: String },
    razorpay_payment_id: { type: String },
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;