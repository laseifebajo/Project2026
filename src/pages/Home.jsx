import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import FeauturedCars from '../components/FeauturedCars'
import Banner from '../components/Banner'
import Testimonals from '../components/Testimonals'

const Home = () => {
  return (
    <>
      <Hero />
      <About /> 
      <FeauturedCars />
      <Banner />
      <Testimonals /> 
    </>
    
  )
}

export default Home