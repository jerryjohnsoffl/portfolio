import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './Hero/Hero'
import About from './About/About'
import Skills from './Skills/Skills'
import Education from './Education/Education'
import Contact from './Contact/Contact'
import Projects from './Projects/Projects'

function App() {
  
  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
