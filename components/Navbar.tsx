'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: { tr: 'Ana Sayfa', en: 'Home' } },
    { href: '/artists', label: { tr: 'Sanatçılar', en: 'Artists' } },
    { href: '/releases', label: { tr: 'Yayınlar', en: 'Releases' } },
    { href: '/career', label: { tr: 'Kariyer', en: 'Career' } },
    { href: '/about', label: { tr: 'Hakkımızda', en: 'About' } },
    { href: '/contact', label: { tr: 'İletişim', en: 'Contact' } },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-secondary/95 backdrop-blur-sm shadow-lg shadow-primary/10' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-32 h-12"
            >
              <div className="w-full h-full bg-primary text-secondary flex items-center justify-center font-display font-bold text-xl rounded-lg">
                Anasayfa
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-primary'
                    : 'text-white hover:text-primary-light'
                }`}
              >
                <span>{link.label[language]}</span>
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Language Selector */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setLanguage('tr')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                language === 'tr'
                  ? 'bg-primary text-secondary shadow-yellow'
                  : 'text-white hover:text-primary-light'
              }`}
            >
              TR
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                language === 'en'
                  ? 'bg-primary text-secondary shadow-yellow'
                  : 'text-white hover:text-primary-light'
              }`}
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-10 p-2 text-white hover:text-primary-light transition-colors"
          >
            <div className="w-6 h-5 relative">
              <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isOpen ? 'rotate-45 top-2' : 'top-0'
              }`} />
              <span className={`absolute w-6 h-0.5 bg-current top-2 transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isOpen ? '-rotate-45 top-2' : 'top-4'
              }`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-secondary/98 backdrop-blur-sm md:hidden"
          >
            <div className="container-custom pt-24 pb-8">
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-xl font-medium transition-colors duration-200 ${
                      pathname === link.href
                        ? 'text-primary'
                        : 'text-white hover:text-primary-light'
                    }`}
                  >
                    {link.label[language]}
                  </Link>
                ))}
                <div className="flex items-center space-x-4 pt-4 border-t border-primary/20">
                  <button
                    onClick={() => {
                      setLanguage('tr')
                      setIsOpen(false)
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      language === 'tr'
                        ? 'bg-primary text-secondary shadow-yellow'
                        : 'text-white hover:text-primary-light'
                    }`}
                  >
                    Türkçe
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en')
                      setIsOpen(false)
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      language === 'en'
                        ? 'bg-primary text-secondary shadow-yellow'
                        : 'text-white hover:text-primary-light'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar 