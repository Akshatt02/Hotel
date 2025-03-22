import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BookingPage from "./pages/home";
import FacilitiesPage from "./pages/facility";
import Footer from './components/footer';

import {Navigate,Route,Routes,useNavigate} from "react-router-dom"
import './App.css'
 function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* {navbar } */}
 {/* {routes to the pages */}
  <BookingPage/>    
     </>
  )
}

export default App
