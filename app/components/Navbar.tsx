'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState('TR')
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === 'TR' ? 'EN' : 'TR')
    // Here you would implement actual language switching logic
  }

  const navItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Sanatçılarımız', href: '/artists' },
    { label: 'Yayınlarımız', href: '/releases' },
    { label: 'Hakkımızda', href: '/about' },
    { label: 'İletişim', href: '/contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-secondary/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.span 
              className="text-primary font-display text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              MUSIC LABEL
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${pathname === item.href ? 'text-primary' : ''}`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <motion.button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-primary hover:text-primary-dark transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GlobeAltIcon className="h-5 w-5" />
              <span>{language}</span>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-primary"
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 rounded-lg transition-colors ${
                      pathname === item.href
                        ? 'text-primary bg-primary/10'
                        : 'text-white hover:text-primary hover:bg-primary/5'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-1 px-3 py-2 w-full text-primary hover:text-primary-dark transition-colors"
                >
                  <GlobeAltIcon className="h-5 w-5" />
                  <span>{language}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar 