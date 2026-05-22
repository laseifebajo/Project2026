import React, { useState } from 'react'

const Auth = ({ open, setOpen }) => {

  const [isLogin, setIsLogin] = useState(true)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  // CLOSE MODAL
  if (!open) return null

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const endpoint = isLogin
        ? 'http://localhost:5000/api/auth/login'
        : 'http://localhost:5000/api/auth/register'

      const res = await fetch(endpoint, {

        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {

        alert(
          isLogin
            ? 'Login Successful'
            : 'Account Created'
        )

        // SAVE USER
        if (data.user) {

          localStorage.setItem(
            'user',
            JSON.stringify(data.user)
          )
        }

        // CLEAR FORM
        setFormData({
          name: "",
          email: "",
          password: "",
        })

        // CLOSE MODAL
        setOpen(false)

      } else {

        alert(data.message)
      }

    } catch (err) {

      console.log(err)

      alert('Something went wrong')
    }
  }

  return (

    <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-[999]'>

      <div className='bg-white w-[95%] max-w-md rounded-2xl p-8 shadow-xl relative'>

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className='absolute top-4 right-4 text-xl'
        >
          ×
        </button>

        {/* TITLE */}
        <h2 className='text-3xl font-bold text-center mb-6'>

          {isLogin ? "Login" : "Create Account"}

        </h2>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className='space-y-4'
        >

          {/* NAME */}
          {!isLogin && (

            <input
              type="text"
              name="name"
              placeholder='Full Name'
              value={formData.name}
              onChange={handleChange}
              className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none'
              required
            />

          )}

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder='Enter Email'
            value={formData.email}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none'
            required
          />

          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            placeholder='Enter Password'
            value={formData.password}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none'
            required
          />

          {/* BUTTON */}
          <button
            type='submit'
            className='w-full bg-black text-white py-3 rounded-lg font-semibold hover:opacity-90 transition'
          >

            {isLogin ? "Login" : "Sign Up"}

          </button>

        </form>

        {/* TOGGLE */}
        <p className='text-center mt-5 text-sm'>

          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"
          }

          <button
            onClick={() => setIsLogin(!isLogin)}
            className='ml-2 font-bold'
          >

            {isLogin ? "Sign Up" : "Login"}

          </button>

        </p>

      </div>

    </div>
  )
}

export default Auth