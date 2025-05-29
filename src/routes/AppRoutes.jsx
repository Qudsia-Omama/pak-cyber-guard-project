
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Awareness from '../pages/Awareness'
import ContactUs from '../pages/ContactUs'
import Login from '../pages/Login'
import Register from '../pages/Register'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/awareness" element={<Awareness />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default AppRoutes
