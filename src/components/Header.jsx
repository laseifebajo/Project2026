import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import { assets } from "../assets/assets/data.js"
import Navbar from './Navbar'
import Auth from './Auth'

const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  const [authOpen, setAuthOpen] = useState(false)

  const location = useLocation()

  const isHomePage = location.pathname === "/"

  return (

    <header className='bg-white fixed top-0 left-0 right-0 z-50 shadow-sm py-3'>

      <div className='max-padd-container'>

        <div className='flexBetween'>

          {/* LOGO */}
          <div className='flex flex-1'>

            <Link to={"/"}>

              <img
                src={assets.logoImg}
                alt="logo"
                width={88}
                className='h-7'
              />

              <span className='text-black uppercase text-xs font-extrabold tracking-[6px] relative bottom-1'>
                GalwayRental
              </span>

            </Link>

          </div>

          {/* NAVBAR */}
          <Navbar
            containerStyles={
              menuOpened
                ? "flex"
                : "hidden lg:flex"
            }
          />

          {/* RIGHT SIDE */}
          <div className='flex sm:flex-1 items-center sm:justify-end gap-x-4 sm:gap-x-8'>

            {/* SEARCH */}
            <div className='relative hidden xl:flex items-center'>

              <div className={`transition-all duration-300 ease-in-out ring-1 ring-slate-900/10 bg-white rounded-full overflow-hidden ${
                showSearch
                  ? "w-[266px] opacity-100 px-4 py-2"
                  : "w-0 opacity-0 px-0 py-0"
              }`}>

                <input
                  type="text"
                  placeholder='Type Here..'
                  className='w-full text-sm outline-none'
                />

              </div>

              <div
                onClick={() =>
                  setShowSearch(prev => !prev)
                }
                className='absolute right-0 ring-1 ring-slate-900/10 bg-white p-[8px] rounded-full cursor-pointer z-10'
              >

                <img
                  src={assets.search}
                  alt=""
                />

              </div>

            </div>

            {/* LOGIN BUTTON */}
            <button
              onClick={() => setAuthOpen(true)}
              className='btn-solid bg-black flexCenter gap-2 rounded-full'
            >

              Login

              <img
                src={assets.user}
                alt=''
              />

            </button>

          </div>

        </div>

      </div>

      {/* AUTH MODAL */}
      <Auth
        open={authOpen}
        setOpen={setAuthOpen}
      />

    </header>
  )
}

export default Header