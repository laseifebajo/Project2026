import React, { useState, useEffect } from 'react'
import{Link} from 'react-router-dom'
import { assets, cities, dummyCars} from '../assets/assets/data'
import Title from './Title'
import Item from './Item'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay} from 'swiper/modules';


const FeauturedCars = () => {
  const [featured, setFeatured] = useState([])

  useEffect(()=>{
    const data = dummyCars.filter((car)=> cities.includes(car.city));
    setFeatured(data)
  },[dummyCars])

  return (
    <section>
      <Title
      title1={"Your next car awaits you"}
      
      />
    <div > 
      <h5>
        <span className='font-bold'>Displaying 1-6 </span>from larger listing
      </h5>
      <Link to={'listing'} onClick={() =>scrollTo(0,0)}
      className='bg-black text-white text-2xl rounded-md p-2 flexCenter'>
        <img src={assets.sliders}alt='' className='invert'/>
      </Link>

    </div>
    {/* Container */}
    <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          600:{
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1124:{
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1300:{
            slidesPerView: 4,
            spaceBetween:30,
          },
          
        }}
        modules={[Autoplay]}
        className="h-[488ps] -md;h-[533px] xl:h-[422px] mt-5"
      >
        {featured.slice(0,6).map((car)=>(
        <SwiperSlide key={car._id}>
          <Item car={car}/>
       </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default FeauturedCars