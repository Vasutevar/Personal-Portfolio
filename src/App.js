import React from 'react';
import Home from './pages/Home.jsx'
import Navbar from './pages/Navbar'
import About from './pages/About'
import Skills from './pages/Skills';
import Work from './pages/Work';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      
    </>
  )
}

export default App;