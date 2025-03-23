import Razorpay from "razorpay";
import dotenv from "dotenv";
import crypto from "crypto";
import Booking from "../models/Booking.js";

dotenv.config();

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export const createOrder = async (req, res) => {
    try {
        const { amount, currency, bookingId } = req.body;

        const options = {
            amount: amount * 100,
            currency,
            receipt: `receipt_${bookingId}`,
        };

        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: "Failed to create order" });
    }
};

export const verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        const generated_signature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(razorpay_order_id + "|" + razorpay_payment_id)
            .digest("hex");

        if (generated_signature === razorpay_signature) {
            await Booking.findOneAndUpdate(
                { razorpay_order_id },
                { paymentStatus: "Paid", razorpay_payment_id },
                { new: true }
            );

            res.json({ success: true, message: "Payment verified successfully" });
        } else {
            res.status(400).json({ success: false, message: "Invalid signature" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error verifying payment" });
    }
};