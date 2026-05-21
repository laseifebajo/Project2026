import React from 'react'
import { assets } from '../assets/assets/data'
import { useNavigate } from 'react-router-dom'

const Item = ({car}) => {
    const currency = "€"
    const navigate = useNavigate()
    //colors to cycle through
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#33FFF5"];
    // compute an index from product._id parseInt fallback to 0 for safety
    const bgColor = colors[parseInt(car._id?.slice(-4) || "0", 16) % colors.length];

  return (
  <div
    onClick={() => {
      navigate("/listing/" +car._id);
      scrollTo(0, 0);
    }}
    className="block rounded-lg ring-1 ring-slate-900/5 p-5 cursor pointer"
    style={{ backgroundColor: bgColor }}
  >
    <h4 className='line-clamp-1'>{car.title}</h4>
    <div className='flex-between'>
      <h5 className='my-1 text-gray-50'>{car.bodyType}</h5>

      <div className='text-sm font-bold text-solid'>
        {currency}
        {car.price.sale} | {currency}
        {car.price.rent}.00
        <span className="text-xs">/day</span>
      </div>
    </div>
  { /*Image*/ }
  <div className='relative py-6'>
    <img src={car.images[0]} alt={car.title} />
 </div>
 {/* Info */ }
 <div>
    <p>
        <img src={assets.transmission} alt='' width={19} />
        {car.specs.transmission}
    </p>
    <hr/>
    <p>
        <img src={assets.seats} alt='' width={23} />
        {car.specs.seats} seats
    </p>
    <hr/>
    <p>
        <img src={assets.fuel} alt='' width={19} />
        {car.specs.fuelType}
    </p>
 </div>
    </div>

)
}

export default Item