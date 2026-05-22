import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets/data'
import Title from './Title'
import Item from './Item'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

const FeauturedCars = () => {
  const [featured, setFeatured] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/cars')
      .then(res => res.json())
      .then(data => {
        setFeatured(data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <section>
      <Title title1={"Your next car awaits you"} />

      <div>
        <h5>
          <span className='font-bold'>Displaying 1-6 </span>from larger listing
        </h5>

        <Link
          to={'listing'}
          onClick={() => scrollTo(0, 0)}
          className='bg-black text-white text-2xl rounded-md p-2 flexCenter'
        >
          <img src={assets.sliders} alt='' className='invert' />
        </Link>
      </div>

      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          600: { slidesPerView: 2, spaceBetween: 30 },
          1124: { slidesPerView: 3, spaceBetween: 30 },
          1300: { slidesPerView: 4, spaceBetween: 30 },
        }}
        modules={[Autoplay]}
        className="mt-5"
      >
        {featured.slice(0, 6).map((car) => (
          <SwiperSlide key={car.id}>
            <Item car={car} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default FeauturedCars