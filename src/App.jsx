import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './Hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar />
        <Hero />
      </div>
    </>
  )
}

export default App
