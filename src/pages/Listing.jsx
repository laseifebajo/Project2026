import React, { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Item from '../components/Item'
import { dummyCars } from '../assets/assets/data'

const Listing = () => {

  const [selectedFilter, setSelectedFilter] = useState({
    bodyType: [],
    priceRange: [],
  })

  const [selectedSort, setSelectedSort] =
    useState("Relevant")

  const [searchQuery, setSearchQuery] =
    useState("")

  const [searchParams] = useSearchParams()

  const heroDestination =
    (searchParams.get("destination") || "")
      .toLowerCase()
      .trim()

  const currency = "€"

  const bodyTypes = [
    "Coupe",
    "SUV",
    "Sedan",
    "Convertible",
    "Hatchback",
    "Van",
    "Wagon",
  ]

  const priceRanges = [
    "0 to 200",
    "200 to 500",
    "500 to 1000",
    "1000 to 5000",
  ]

  // FILTER HANDLER
  const handleFilterChange = (
    checked,
    value,
    type
  ) => {

    setSelectedFilter((prev) => {

      const updated = { ...prev }

      if (checked) {
        updated[type] = [...updated[type], value]
      } else {
        updated[type] =
          updated[type].filter(
            (item) => item !== value
          )
      }

      return updated
    })
  }

  // PRICE FILTER
  const matchesPrice = (car) => {

    if (
      selectedFilter.priceRange.length === 0
    ) {
      return true
    }

    return selectedFilter.priceRange.some(
      (range) => {

        const [min, max] =
          range.split(" to ").map(Number)

        return (
          car.price?.rent >= min &&
          car.price?.rent <= max
        )
      }
    )
  }

  // BODY TYPE FILTER
  const matchesType = (car) => {

    if (
      selectedFilter.bodyType.length === 0
    ) {
      return true
    }

    return selectedFilter.bodyType.includes(
      car.bodyType
    )
  }

  // SEARCH FILTER
  const matchesSearch = (car) => {

    if (!searchQuery) return true

    const q = searchQuery.toLowerCase()

    return (
      car.title?.toLowerCase().includes(q) ||
      car.city?.toLowerCase().includes(q) ||
      car.country?.toLowerCase().includes(q)
    )
  }

  // HERO DESTINATION FILTER
  const matchesHeroDestination = (car) => {

    if (!heroDestination) return true

    return (
      car.city?.toLowerCase().includes(
        heroDestination
      )
    )
  }

  // FINAL FILTERED CARS
  const filteredCars = useMemo(() => {

    let cars = dummyCars.filter((car) => (
      matchesPrice(car) &&
      matchesType(car) &&
      matchesSearch(car) &&
      matchesHeroDestination(car)
    ))

    if (selectedSort === "Low to high") {

      cars.sort(
        (a, b) =>
          (a.price?.rent || 0) -
          (b.price?.rent || 0)
      )
    }

    if (selectedSort === "High to Low") {

      cars.sort(
        (a, b) =>
          (b.price?.rent || 0) -
          (a.price?.rent || 0)
      )
    }

    return cars

  }, [
    selectedFilter,
    selectedSort,
    searchQuery,
    heroDestination,
  ])

  return (

    <div className='bg-primary min-h-screen'>

      <div className='max-padd-container pt-32 pb-16'>

        <div className='flex flex-col lg:flex-row gap-8'>

          {/* LEFT FILTERS */}
          <div className='w-full lg:w-[280px]'>

            {/* SEARCH */}
            <div className='bg-white p-5 rounded-xl shadow-sm mb-5'>

              <input
                type="text"
                placeholder='Search cars...'
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
                className='w-full border border-gray-300 rounded-lg px-4 py-2 outline-none'
              />

            </div>

            {/* SORT */}
            <div className='bg-white p-5 rounded-xl shadow-sm mb-5'>

              <h5 className='font-semibold mb-3'>
                Sort By
              </h5>

              <select
                value={selectedSort}
                onChange={(e) =>
                  setSelectedSort(e.target.value)
                }
                className='w-full border border-gray-300 rounded-lg px-3 py-2'
              >

                <option>Relevant</option>
                <option>Low to high</option>
                <option>High to Low</option>

              </select>

            </div>

            {/* BODY TYPE */}
            <div className='bg-white p-5 rounded-xl shadow-sm mb-5'>

              <h5 className='font-semibold mb-4'>
                Car Type
              </h5>

              <div className='space-y-2'>

                {bodyTypes.map((type) => (

                  <label
                    key={type}
                    className='flex items-center gap-2 text-sm'
                  >

                    <input
                      type="checkbox"
                      checked={selectedFilter.bodyType.includes(type)}
                      onChange={(e) =>
                        handleFilterChange(
                          e.target.checked,
                          type,
                          "bodyType"
                        )
                      }
                    />

                    {type}

                  </label>

                ))}

              </div>

            </div>

            {/* PRICE */}
            <div className='bg-white p-5 rounded-xl shadow-sm'>

              <h5 className='font-semibold mb-4'>
                Price Range
              </h5>

              <div className='space-y-2'>

                {priceRanges.map((price) => (

                  <label
                    key={price}
                    className='flex items-center gap-2 text-sm'
                  >

                    <input
                      type="checkbox"
                      checked={selectedFilter.priceRange.includes(price)}
                      onChange={(e) =>
                        handleFilterChange(
                          e.target.checked,
                          price,
                          "priceRange"
                        )
                      }
                    />

                    {currency}{price}

                  </label>

                ))}

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className='flex-1'>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>

              {filteredCars.length > 0 ? (

                filteredCars.map((car) => (

                  <Item
                    key={car._id}
                    car={car}
                  />

                ))

              ) : (

                <div className='col-span-full text-center py-20'>

                  <h4 className='text-2xl font-semibold'>
                    No Cars Found
                  </h4>

                  <p className='text-gray-500 mt-2'>
                    Try adjusting your filters.
                  </p>

                </div>

              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Listing