require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "123ad0011@iiitk.ac.in", // Your email (e.g., Gmail)
    pass: "sriman123", // Your app password (not normal password)
  },
});

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: "123ad0011@iiitk.ac.in",
    to: "123cs0073@iiitk.ac.in", // Your email to receive messages
    subject: "New Contact Form Submission - Vithal Hotel",
    text: `You have a new message from:
    
    Name: ${name}
    Email: ${email}
    Message: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email", error });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
