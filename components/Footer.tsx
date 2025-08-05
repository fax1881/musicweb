'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

type Language = 'tr' | 'en'

interface FooterLink {
  href: string
  label: { [key in Language]: string } | string
}

interface FooterSection {
  title: { [key in Language]: string }
  links: FooterLink[]
}

interface FooterLinks {
  [key: string]: FooterSection
}

const Footer = () => {
  const { language } = useLanguage()

  const footerLinks: FooterLinks = {
    company: {
      title: { tr: 'Şirket', en: 'Company' },
      links: [
        { href: '/about', label: { tr: 'Hakkımızda', en: 'About' } },
        { href: '/career', label: { tr: 'Kariyer', en: 'Career' } },
        { href: '/contact', label: { tr: 'İletişim', en: 'Contact' } },
      ],
    },
    artists: {
      title: { tr: 'Sanatçılar', en: 'Artists' },
      links: [
        { href: '/artists', label: { tr: 'Tüm Sanatçılar', en: 'All Artists' } },
        { href: '/artists/new', label: { tr: 'Yeni Sanatçılar', en: 'New Artists' } },
        { href: '/artists/featured', label: { tr: 'Öne Çıkanlar', en: 'Featured' } },
      ],
    },
    releases: {
      title: { tr: 'Yayınlar', en: 'Releases' },
      links: [
        { href: '/releases', label: { tr: 'Tüm Yayınlar', en: 'All Releases' } },
        { href: '/releases/new', label: { tr: 'Yeni Yayınlar', en: 'New Releases' } },
        { href: '/releases/featured', label: { tr: 'Öne Çıkanlar', en: 'Featured' } },
      ],
    },
    social: {
      title: { tr: 'Sosyal Medya', en: 'Social Media' },
      links: [
        { href: 'https://instagram.com', label: 'Instagram' },
        { href: 'https://twitter.com', label: 'Twitter' },
        { href: 'https://youtube.com', label: 'YouTube' },
        { href: 'https://spotify.com', label: 'Spotify' },
      ],
    },
  }

  const getLabel = (label: FooterLink['label']): string => {
    if (typeof label === 'string') return label
    return label[language]
  }

  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-40 h-12"
              >
                <div className="w-full h-full bg-primary text-secondary flex items-center justify-center font-display font-bold text-2xl rounded-lg">
                  ORAMAN RECORDS
                </div>
              </motion.div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              {language === 'tr'
                ? 'Yeni nesil müzik platformu ile sanatçılarımızın özgün seslerini keşfedin.'
                : 'Discover the unique voices of our artists through our next-generation music platform.'}
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-secondary transition-colors duration-200"
                >
                  <span className="sr-only">{getLabel(link.label)}</span>
                  {link.label === 'Instagram' && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )}
                  {link.label === 'Twitter' && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  )}
                  {link.label === 'YouTube' && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  )}
                  {link.label === 'Spotify' && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([key, section]) => {
            if (key === 'social') return null
            return (
              <div key={key}>
                <h3 className="text-lg font-semibold text-primary mb-4">
                  {section.title[language]}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-primary-light transition-colors duration-200"
                      >
                        {getLabel(link.label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Oraman Records. {language === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-primary-light text-sm transition-colors duration-200"
              >
                {language === 'tr' ? 'Gizlilik Politikası' : 'Privacy Policy'}
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-primary-light text-sm transition-colors duration-200"
              >
                {language === 'tr' ? 'Kullanım Koşulları' : 'Terms of Use'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 