
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Report Crime', href: '/#report' },
    { name: 'Awareness', href: '/awareness' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname === href
  }

  const scrollToReport = () => {
    if (location.pathname === '/') {
      document.getElementById('report')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/#report'
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-gray-900 bg-opacity-95 backdrop-blur-sm border-b border-gray-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-cyber-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">🛡️</span>
            </div>
            <span className="text-xl font-bold bg-cyber-gradient bg-clip-text text-transparent">
              Pak Cyber Guard
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.href === '/#report' ? (
                <button
                  key={item.name}
                  onClick={scrollToReport}
                  className="nav-link"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn btn-primary"
            >
              Register
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                item.href === '/#report' ? (
                  <button
                    key={item.name}
                    onClick={() => {
                      scrollToReport()
                      setIsMenuOpen(false)
                    }}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-left"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-gray-300 hover:text-blue-400 transition-colors duration-300 ${
                      isActive(item.href) ? 'text-blue-400' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <hr className="border-gray-700" />
              <Link
                to="/login"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-primary w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
