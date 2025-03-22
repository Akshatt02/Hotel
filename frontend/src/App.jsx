import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rooms from "./pages/rooms";
import RoomDetails from "./pages/roomDetails";
import Booking from "./pages/booking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/booking" element={<Booking />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:roomType" element={<RoomDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
