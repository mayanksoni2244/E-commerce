import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './nav'
import Home from './home'

import Details from './Details'
import Login from './login'
import Cart from './Cart'
import Footer from './Footer'
import Register from './register'
import Faq from './Faq'
import Profile from './profile'
import Checkout from './checkout'
import Contact from './Contact'
import Protect from './protectedroute/protect'
import AboutUs from './AboutUs'



const Appwraper = () => {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/contact' element={
          <Protect>
            <Contact />
          </Protect>
        } />
        <Route path='/checkout' element={
          <Protect>
            <Checkout />
          </Protect>
        } />
        <Route path='/details' element={<Details />} />
      </Routes>
      {location.pathname === '/home' && <Footer />}

    </>

  )
}
const App = () => {
  return (
    <Router>
      <Appwraper />
    </Router>
  )

}

export default App
