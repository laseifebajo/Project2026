import React from 'react'

const Blog = () => {
  return (
    <section className='bg-primary min-h-screen pt-36 pb-20'>

      <div className='max-padd-container'>

        {/* HEADING */}
        <div className='text-center max-w-3xl mx-auto mb-16'>

          <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
            Discover The World Of
            <span className='text-black'> Luxury Cars</span>
          </h1>

          <p className='text-gray-600 mt-5 text-lg'>
            Explore premium vehicles, driving tips, luxury experiences,
            and the latest trends in the automotive world.
          </p>

        </div>

        {/* BLOG GRID */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>

          {/* BLOG CARD */}
          <div className='bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300'>

            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className='h-60 w-full object-cover'
            />

            <div className='p-6'>

              <span className='text-sm text-gray-500'>
                April 2026
              </span>

              <h3 className='text-2xl font-bold mt-2'>
                Why Supercars Are The Ultimate Driving Experience
              </h3>

              <p className='text-gray-600 mt-4'>
                Supercars combine breathtaking design, incredible speed,
                and cutting-edge engineering to deliver an unforgettable
                experience behind the wheel.
              </p>

            </div>

          </div>

          {/* BLOG CARD */}
          <div className='bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300'>

            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className='h-60 w-full object-cover'
            />

            <div className='p-6'>

              <span className='text-sm text-gray-500'>
                March 2026
              </span>

              <h3 className='text-2xl font-bold mt-2'>
                Choosing The Perfect Rental Car For Your Trip
              </h3>

              <p className='text-gray-600 mt-4'>
                Whether you need a luxury sedan, SUV, or sports car,
                choosing the right vehicle can completely transform
                your travel experience.
              </p>

            </div>

          </div>

          {/* BLOG CARD */}
          <div className='bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300'>

            <img
              src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className='h-60 w-full object-cover'
            />

            <div className='p-6'>

              <span className='text-sm text-gray-500'>
                February 2026
              </span>

              <h3 className='text-2xl font-bold mt-2'>
                The Rise Of Electric Luxury Vehicles
              </h3>

              <p className='text-gray-600 mt-4'>
                Electric performance cars are changing the industry,
                offering instant acceleration, futuristic technology,
                and sustainable luxury.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Blog