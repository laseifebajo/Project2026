import React from 'react'
import { assets, cities } from '../assets/assets/data'

const Hero = () => {
  return (
    <section className='bg-primary'>
      {/*Container*/}
      <div className='max-padd-container relative flex justify-end mx-auto flex-col gap-9 py-6 pt-32 z-10'>
        <div className='flexcenter flex-col gap-6 gap-y-6'>
          <div className='text-center max-w-5xl'></div>
          <h1 className='capitalize leading-tight'>
            Explore <span className='bg-gradient-to-r from-solid to to-white pl-1 rounded-md'>premium vehicles </span>available in exciting destinations
          </h1>
        </div>
        {/*search/Booking Form*/}
        <form className='bg-white text-gray-500 rounded-md md:rounded-full px-6 md:pl-12 py-4  flex flex-col md:flex-row gap-4 lg:gap-x8 max-w-md md:max-w-4xl ring-1 ring-slate-900/5 relative'>

          <div className='flex flex-col w-full'>
            <div className='flex items-center gap-2'>
            <img src={assets.pin} alt='pinIcon' width={20} />
              <label htmlFor="destinationInput">Destination</label>
            </div>
            <input list='destinations' id="destinationInput" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none capitalize" placeholder="Type here" required />
            <datalist id="destinations">
              {cities.map((city, index) => (
                <option value={city} key={index} />
              ))}
            </datalist>
          </div>

          <div className='flex flex-col w-full'>
            <div className='flex items-center gap-2'>
              <img src={assets.calendar} alt='calendarIcon' width={20} />
                <label htmlFor="pickUp">Pick Up</label>
            </div>
            <input id="pickUp" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
          </div>

          <div>
            <div className='flex items-center gap-2'>
            <img src={assets.calendar} alt='calenderIcon' width={20} />
              <label htmlFor="dropoff">Drop Off</label>
            </div>
            <input id="dropoff" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
          </div>

          <button type='submit' className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto max-md:w-full max-md:py-1 cursor-pointer' >
            <img src={assets.search} alt='searchIcon' width={20} 
            className='invert'/>
            <span>Search</span>
          </button>
        </form>

        <div className='flexCenter'>
          <img src={assets.bg} alt="bg" className='w-full md:w-[77%] ' />
        </div>
      </div>
    </section>
  )

}

export default Hero