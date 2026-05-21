import React, {useState,useMemo, use}from 'react'
import {useSearchParams} from 'react-router-dom'
import Item from '../components/Item'
import { dummyCars } from '../assets/assets/data'


const Listing = () => {
  const [selectedFilter, setSelectedFilters] = useState({
    bodyType: [],
    priceRange: [],
  })
  const [selectedSort, setSelectedSort] = useState("")
  const [currPage, setCurrPage] = useState(1)
  const itemsPerPage = 6
  const currency = "€"
  const [searchQuery, setSearchQuery] = useState("")
  const[searchParams] = useSearchParams()
  const heroDestination = (searchParams.get("destination") || "").toLowerCase().trim()
  const sortOptions = ["Relevant", "Low to high", "High to Low"];


  const bodyType = [
    "Coupe",
    "Suv",
    "Sedan",
    "Convertible",
    "Hatchback",
    "Van",
    "Wagon",
  ];

  const priceRange = [
    "0 to 20000",
    "20000 to 50000",
    "50000 to 100000",
    "100000 to 200000",
  ];

  //const toogle filter checkboxes
  const handleFilterChange = (checked, value, type)=>{
    setSelectedFilters((prev)=>{
    const updated = {...prev}
    if(checked){
      updated[type].push(value)
    }else{
      updated[type] = updated[type].filter(v => v !== value)
    }
    return updated
    })
  }

  //sorting function
  const sortCars = (a,b)=>{
    if(selectedSort === "Low to high"){ return a.price.sale - b.price.sale
    }
    if(selectedSort === "High to Low"){ return b.price.sale - a.price.sale
      
    }
    return 0
  }

    // Price Filters
    const matchesPrice = (car)=>{
      if(selectedFilter.priceRange.length === 0) return true
      return selectedFilter.priceRange.some((range)=>{
        const [min, max] = range.split(" to ").map(Number)
        return car.price.sale >= min && car.price.sale <= max
      })
    }
    //Type filter
    const matchesType = (car)=>{
      if(selectedFilter.bodyType.length === 0) return true
      return selectedFilter.bodyType.includes(car.bodyType)
    }

    //Search filter using headers searchQuery
    const matchesSearch = (car)=>{
      if(!searchQuery) return true
      return (
        car.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.country.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }   

    //hero destination filter(from hero form)
    const matchesHeroDestination = (car)=>{
      if(!heroDestination) return true
      return (car.city || "").toLowerCase().includes(heroDestination)
      
    }

    //filtered + sorted cars
    const filteredCars = useMemo(()=>{
      return dummyCars.filter((c)=>
        matchesPrice(c) &&
        matchesType(c) &&
        matchesSearch(c) &&
        matchesHeroDestination(c)
      ).sort(sortCars)
    },[dummyCars, selectedFilter, selectedSort, searchQuery, heroDestination])

  
  return (
    <div className='bg-primary'>
      <div className='max-pad-container !px-0 mt-18 pb-16'>
        {/*Container */}
        <div className='flex flex-col sm:flex-row gap-6'>
          {/*Filters - left side*/}
          <div className=''>
            {/*sort by price*/}
          <div className='py-3'>
            <h5 className='mb-3'>Sort By</h5>
            <select value ={selectedSort} onChange={(e)=>setSelectedSort(e.target.value)} className='bg-primary ring-1 ring-slate-900/10 outline-none text-gray-30 text-sm font-semibold text-gray-50 h-8 w-full rounded px-2'>
              {sortOptions.map((sort, index)=>(
                <option key={index} value={sort}>{sort}</option>
              ))}
            </select>
          </div>
            {/*Car Type*/}
          <div className='p-5 mt-5 bg-primary rounded-xl'>
            <h5 className='mb-4'>Car Type</h5>
              {bodyType.map((type)=>(
                <label key={type} className={""}>
                <input type="checkbox" checked={selectedFilter.bodyType.includes(type)} onChange={(e)=>handleFilterChange(e.target.value, type, "bodyType")} />
                {type}
                </label>
              ))}
          </div>
        </div>
        {/*Price Range*/}
          <div className='p-5 mt-5 bg-primary rounded-xl'>
            <h5 className='mb-4'>Price Range</h5>
              {priceRange.map((price)=>(
                <label key={price} className={"flex gap-2 text-sm font-semibold text-gray-50 mb-1"}>
                <input type="checkbox" checked={selectedFilter.priceRange.includes(price)} onChange={(e)=>handleFilterChange(e.target.value, price, "priceRange")} />
                {currency}{price}
                </label>
              ))}
          </div>
          </div>
          {/* Filteres cars right side */}
          <div className='max-sm:px-10 sm:pr-10 bg-white p-4 rounded-l-xl my-4'>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
            {filteredCars.length > 0 ? (
              filteredCars.map((car)=>(
                <Item key={car._id} car={car}/>
              ))
            ) : (
              <p className='capitalize'>No cars found matching the selected filters.</p>
            )}
          </div>
        </div>

    </div>
    </div>
  )
}

export default Listing