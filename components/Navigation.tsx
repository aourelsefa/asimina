'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#categories', label: 'Categories' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    // If not on homepage, navigate to homepage first
    if (!isHomePage) {
      window.location.href = `/${href}`
      return
    }
    
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      const offset = 80 // Account for fixed navigation height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    
    // Close mobile menu if open
    setIsMobileMenuOpen(false)
  }

  // On category pages, always show scrolled style
  const shouldShowScrolled = isScrolled || !isHomePage

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        shouldShowScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {isHomePage ? (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className={`text-xl font-bold transition-all duration-300 font-serif ${
                shouldShowScrolled
                  ? 'text-gray-900'
                  : 'text-white'
              }`}
            >
              Asimina Habipi
            </a>
          ) : (
            <Link
              href="/"
              className="text-xl font-bold transition-all duration-300 font-serif text-gray-900"
            >
              Asimina Habipi
            </Link>
          )}

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => {
              if (!isHomePage) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm uppercase tracking-wider font-medium transition-all duration-300 relative group ${
                      shouldShowScrolled
                        ? 'text-gray-700 hover:text-gray-900'
                        : 'text-white hover:text-white'
                    }`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
                  </Link>
                )
              }
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm uppercase tracking-wider font-medium transition-all duration-300 relative group ${
                    shouldShowScrolled
                      ? 'text-gray-700 hover:text-gray-900'
                      : 'text-white hover:text-white'
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
                </a>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              shouldShowScrolled ? 'text-gray-900' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 space-y-6">
            {navItems.map((item) => {
              if (!isHomePage) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block text-sm uppercase tracking-wider font-medium transition-colors ${
                      shouldShowScrolled
                        ? 'text-gray-700'
                        : 'text-white'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              }
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block text-sm uppercase tracking-wider transition-colors ${
                    shouldShowScrolled
                      ? 'text-gray-700'
                      : 'text-white'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}
