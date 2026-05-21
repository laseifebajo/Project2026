import React from 'react'
import { assets } from '../assets/assets/data'

const About = () => {
  return (
    <section className='max-padd-container py16 xl:py-28 !pt-36'>
      
      
      {/* Single centered container */}
      <div className='flex flex-col items-center text-center gap-8'>

        <p className='max-w-[600px]'>
          Find reliable cars with transparent pricing and exceptional service.
        </p>

        <div>
          <h5 className='font-semibold'>Wide Vehicle Selection</h5>
          <p className='text-sm mt-2 max-w-[500px]'>
            Book in seconds with instant confirmations and flexible pickup options
          </p>
        </div>

        {/* Image */}
        <img
          src={assets.about1}
          alt="about"
          className='w-full max-w-[280px] md:max-w-[350px] h-auto object-contain drop-shadow-xl'
        />

      </div>

    </section>
  )
}

export default About