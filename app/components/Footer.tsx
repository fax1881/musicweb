'use client'

import Link from 'next/link'
import { FaSpotify, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const socialLinks = [
    { icon: FaSpotify, href: '#', label: 'Spotify' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="bg-secondary-light border-t border-primary/20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <motion.span 
                className="text-primary font-display text-2xl font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                MUSIC LABEL
              </motion.span>
            </Link>
            <p className="text-gray-400">
              Yeni nesil müzik platformu. Sanatçılarımızın özgün seslerini dünyaya duyuruyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary font-display text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/artists" className="text-gray-400 hover:text-primary transition-colors">
                  Sanatçılarımız
                </Link>
              </li>
              <li>
                <Link href="/releases" className="text-gray-400 hover:text-primary transition-colors">
                  Yayınlarımız
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-primary font-display text-lg font-semibold mb-4">Sosyal Medya</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary/20 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Music Label. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 