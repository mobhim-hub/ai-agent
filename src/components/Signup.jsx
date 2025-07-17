import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!form.name) errs.name = 'Name is required'
    if (!form.email) errs.email = 'Email is required'
    if (!form.password) errs.password = 'Password is required'
    if (!form.confirmPassword) errs.confirmPassword = 'Confirm your password'
    if (form.password && form.confirmPassword && form.password !== form.confirmPassword)
      errs.confirmPassword = 'Passwords do not match'
    return errs
  }

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      // Handle signup logic here
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={form.password}
                onChange={handleChange}
                autoComplete="new-password"
              />
              <button
                type="button"
                className="absolute right-3 top-2 text-gray-500"
                onClick={() => setShowPassword(v => !v)}
                tabIndex={-1}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirm ? 'text' : 'password'}
                name="confirmPassword"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={form.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
              />
              <button
                type="button"
                className="absolute right-3 top-2 text-gray-500"
                onClick={() => setShowConfirm(v => !v)}
                tabIndex={-1}
              >
                {showConfirm ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
        <div className="my-4 flex items-center">
          <div className="flex-grow h-px bg-gray-200" />
          <span className="mx-2 text-gray-400 text-xs">OR</span>
          <div className="flex-grow h-px bg-gray-200" />
        </div>
        <button
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
          type="button"
        >
          <svg className="w-5 h-5" viewBox="0 0 48 48">
            <g>
              <circle cx="24" cy="24" r="24" fill="#fff"/>
              <path fill="#4285F4" d="M34.6 24.3c0-.7-.1-1.4-.2-2H24v4.1h6c-.3 1.5-1.3 2.7-2.7 3.5v2.9h4.4c2.6-2.4 4.1-5.9 4.1-10.5z"/>
              <path fill="#34A853" d="M24 36c3.2 0 5.8-1.1 7.7-2.9l-4.4-2.9c-1.2.8-2.7 1.3-4.3 1.3-3.3 0-6-2.2-7-5.2h-4.5v3.1C13.8 33.7 18.5 36 24 36z"/>
              <path fill="#FBBC05" d="M17 26.3c-.3-.8-.5-1.6-.5-2.3s.2-1.6.5-2.3v-3.1h-4.5C11.7 21.3 12 22.6 12 24s-.3 2.7-.5 3.7l4.5-1.4z"/>
              <path fill="#EA4335" d="M24 18.7c1.7 0 3.2.6 4.3 1.7l3.2-3.2C29.8 15.1 27.2 14 24 14c-5.5 0-10.2 2.3-12.5 5.9l4.5 3.1c1-3 3.7-5.2 7-5.2z"/>
            </g>
          </svg>
          Sign up with Google
        </button>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline font-medium">Sign In</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
