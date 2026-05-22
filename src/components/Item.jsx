import React from 'react'
import { assets } from '../assets/assets/data'
import { useNavigate } from 'react-router-dom'

const Item = ({ car }) => {

  const navigate = useNavigate()
  const currency = "€"

  const colors = [
    "#FFE5E0",
    "#E6FFE8",
    "#E5ECFF",
    "#FBE5FF",
    "#E5FFFD",
  ]

  const bgColor =
    colors[(car._id?.length || 0) % colors.length]


    console.log(car.title, car.images)
  return (

    <div
      onClick={() => {
        navigate(`/listing/${car._id}`)
        scrollTo(0, 0)
      }}
      className='rounded-xl p-5 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1'
      style={{ backgroundColor: bgColor }}
    >

      {/* TITLE */}
      <h4 className='font-semibold text-lg line-clamp-1'>
        {car.title}
      </h4>

      {/* TYPE + PRICE */}
      <div className='flex justify-between items-center mt-2'>

        <h5 className='text-gray-700'>
          {car.bodyType}
        </h5>

        <div className='text-sm font-bold text-black'>
          {currency}{car.price?.rent || 0}
          <span className='text-xs font-normal'>
            /day
          </span>
        </div>

      </div>

      {/* IMAGE */}
      <div className='flex justify-center py-6'>

        <img
          src={car.images?.[0] || "/fallback-car.png"}
          alt={car.title}
          className='max-h-[140px] object-contain'
        />

      </div>

      {/* SPECS */}
      <div className='space-y-3 text-sm'>

        <div className='flex items-center gap-2'>
          <img
            src={assets.transmission}
            alt=""
            width={18}
          />

          <span>
            {car.specs?.transmission || "Automatic"}
          </span>
        </div>

        <hr />

        <div className='flex items-center gap-2'>
          <img
            src={assets.seats}
            alt=""
            width={20}
          />

          <span>
            {car.specs?.seats || 4} Seats
          </span>
        </div>

        <hr />

        <div className='flex items-center gap-2'>
          <img
            src={assets.fuel}
            alt=""
            width={18}
          />

          <span>
            {car.specs?.fuelType || "Petrol"}
          </span>
        </div>

      </div>

    </div>
  )
}

export default Item