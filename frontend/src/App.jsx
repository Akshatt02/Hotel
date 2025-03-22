import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactPage from "./pages/Contact";
import Location from "./pages/location"
const Home = () => <h1>Welcome to Vithal Hotel</h1>;
const Rooms = () => <h1>Our Rooms</h1>;
 const Facilities = () => <h1>Our Facilities</h1>;
 const Booking = () => <h1>Book Your Stay</h1>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/location" element={<Location />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path ="/location" element={<Location />} />
      </Routes>
    </Router>
  );
};

export default App;
