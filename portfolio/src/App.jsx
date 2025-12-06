import React from 'react'
// import App from './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParticleBackground from './components/Particle'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Marquee from 'react-fast-marquee'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    {/* https://my-portfolio-delta-five-72.vercel.app/ */}
      {/* <ParticleBackground /> */}
      <Navbar />
      <Marquee direction="left"
      pauseOnHover='true'
      play='true'
      speed={100}
      scrollamount='40'
      className='text-2xl text-amber-300 bg-blue-950 font-bold font-sans cursor-pointer'>Hii welcome to <span className='text-red-600 m-2'>Nitish</span> Portfolio site.<pre> Click and Go to my <a href="https://www.linkedin.com/in/nitish-kumar-531352270/" className='text-blue-200'>Linkedin,</a> <a href="https://github.com/nitish-kumar3" className='text-red-200'>Github,</a> <a href="https://www.facebook.com/profile.php?id=100047232771418" className='text-red-500'>Facebook,</a> <a href="https://www.instagram.com/prajapati_nitish_123/">Instagram</a>.</pre></Marquee>
      <Hero />
      <br />
      <hr className='color-red bg-amber-500 h-3 ' />
      <About/>
      <br />
      <hr className='color-red bg-red-900 h-3 ' />
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>



      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Hero/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/projects" element={<Projects/>} />
          <Route exact path="/testimonials" element={<Testimonials/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
      <Footer/> */}
      
    </>
  )
}

export default App

