import React, { useState } from "react"
//import { BrowserRouter as Router } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import InfoSection from "../components/InfoSection"
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data"
import Triple from "../components/Triple_panel"
import MemeCarousel from "../components/MemeCarousel"
import Footer from "../components/Footer"

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = (param) => {
    setIsOpen(param)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
      <Navbar toggleMenu={toggleMenu} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Triple />
      <MemeCarousel />
      <Footer />
    </>
  )
}

export default Home
