import React, { useState } from 'react'
import { assets } from '../assets/assets/data'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    alert("Message Sent Successfully!")

    setFormData({
      name: "",
      email: "",
      message: "",
    })
  }

  return (

    <section className='max-padd-container py-20 pt-36'>

      {/* HEADER */}
      <div className='text-center max-w-2xl mx-auto mb-14'>

        <h1 className='text-4xl font-bold mb-4'>
          Contact GalwayRental
        </h1>

        <p className='text-gray-600'>
          Have questions about bookings, rentals, pricing, or vehicle availability?
          Our team is here to help you every step of the way.
        </p>

      </div>

      {/* MAIN CONTENT */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>

        {/* LEFT SIDE */}
        <div className='space-y-8'>

          <div className='bg-white p-8 rounded-2xl shadow-sm ring-1 ring-slate-900/5'>

            <h3 className='text-2xl font-bold mb-6'>
              Get In Touch
            </h3>

            <div className='space-y-5'>

              <div className='flex items-center gap-4'>

                <div className='bg-black p-3 rounded-full'>
                  <img
                    src={assets.pin}
                    alt=""
                    width={20}
                    className='invert'
                  />
                </div>

                <div>
                  <h5 className='font-semibold'>Office Location</h5>
                  <p className='text-gray-500 text-sm'>
                    Galway City, Ireland
                  </p>
                </div>

              </div>

              <div className='flex items-center gap-4'>

                <div className='bg-black p-3 rounded-full'>
                  <img
                    src={assets.user}
                    alt=""
                    width={20}
                    className='invert'
                  />
                </div>

                <div>
                  <h5 className='font-semibold'>Customer Support</h5>
                  <p className='text-gray-500 text-sm'>
                    support@galwayrental.com
                  </p>
                </div>

              </div>

              <div className='flex items-center gap-4'>

                <div className='bg-black p-3 rounded-full'>
                  <img
                    src={assets.calendar}
                    alt=""
                    width={20}
                    className='invert'
                  />
                </div>

                <div>
                  <h5 className='font-semibold'>Opening Hours</h5>
                  <p className='text-gray-500 text-sm'>
                    Monday - Sunday | 8:00 AM - 10:00 PM
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* IMAGE */}
          <img
            src={assets.about1}
            alt="contact"
            className='rounded-2xl shadow-lg object-cover'
          />

        </div>

        {/* RIGHT SIDE FORM */}
        <div className='bg-white p-8 rounded-2xl shadow-sm ring-1 ring-slate-900/5'>

          <h3 className='text-2xl font-bold mb-6'>
            Send Us A Message
          </h3>

          <form
            onSubmit={handleSubmit}
            className='space-y-5'
          >

            <div>

              <label className='block mb-2 font-medium'>
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter your name'
                className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none'
                required
              />

            </div>

            <div>

              <label className='block mb-2 font-medium'>
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email'
                className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none'
                required
              />

            </div>

            <div>

              <label className='block mb-2 font-medium'>
                Message
              </label>

              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder='Write your message here...'
                className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none'
                required
              />

            </div>

            <button
              type='submit'
              className='bg-black text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition'
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}

export default Contact