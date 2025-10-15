// import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Project from './components/Project'
import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'

function App() {
  

  return (
    <div>
        <Navbar/>
        <Hero/>
       {/* <About/> */}
      <Project/>
      <Footer/>
    </div>
  )
}

export default App
