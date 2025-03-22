import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactPage from "./pages/Contact";
import Location from "./pages/location";
import Rooms from "./pages/rooms";
import RoomDetails from "./pages/roomDetails";
import Booking from "./pages/booking";
const Home = () => <h1>Welcome to Vithal Hotel</h1>;
const Facilities = () => <h1>Our Facilities</h1>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:roomType" element={<RoomDetails />} />
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