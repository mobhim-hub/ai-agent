import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Features', to: '#features', isSection: true },
  { name: 'Pricing', to: '#pricing', isSection: true },
  { name: 'Blog', to: '#blog', isSection: true },
  { name: 'Contact', to: '#contact', isSection: true },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  // Helper for smooth scroll
  const handleSectionClick = (e, to) => {
    if (to.startsWith('#')) {
      e.preventDefault()
      const el = document.getElementById(to.substring(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        setMenuOpen(false)
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4" aria-label="Main navigation">
        {/* Logo / Site Name */}
        <div className="flex items-center">
          <NavLink to="/" className="text-2xl font-bold text-blue-600 tracking-tight">
            AI Site
          </NavLink>
        </div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.name}>
              {link.isSection ? (
                <a
                  href={link.to}
                  className="transition-colors font-medium px-2 py-1 rounded text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  onClick={e => handleSectionClick(e, link.to)}
                >
                  {link.name}
                </a>
              ) : (
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `transition-colors font-medium px-2 py-1 rounded 
                    ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`
                  }
                  end={link.to === '/'}
                >
                  {link.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <NavLink
            to="/signup"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors"
          >
            Get Started
          </NavLink>
        </div>
        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded text-gray-700 hover:bg-gray-100 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </nav>
      {/* Mobile Menu with smooth transition */}
      <div
        className={`md:hidden bg-white shadow px-4 pb-4 transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <ul className="flex flex-col gap-4 pt-2">
          {navLinks.map(link => (
            <li key={link.name}>
              {link.isSection ? (
                <a
                  href={link.to}
                  className="block transition-colors font-medium px-2 py-2 rounded text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  onClick={e => handleSectionClick(e, link.to)}
                >
                  {link.name}
                </a>
              ) : (
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block transition-colors font-medium px-2 py-2 rounded 
                    ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`
                  }
                  end={link.to === '/'}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <NavLink
            to="/signup"
            className="block w-full text-center bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header
// No changes needed here for routing; see App.jsx for route setup