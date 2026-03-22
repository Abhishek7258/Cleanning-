import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Hero from './pages/Hero'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Tech from './pages/Tech'
import Navbar1 from './components/Navbar1'

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Tech/>}/>
      <Route path='/h' element={<Hero/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App