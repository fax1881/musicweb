'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Geçici veri
const artists = [
  {
    id: 1,
    name: 'poyrazoraman',
    genre: { tr: 'Elektronik / House', en: 'Electronic / House' },
    description: {
      tr: 'Elektronik müzik prodüktörü ve DJ. Minimal ve deep house tarzında üretimler yapıyor.',
      en: 'Electronic music producer and DJ. Creates productions in minimal and deep house style.'
    },
    image: '/images/poyrazoraman.jpg',
    spotifyUrl: 'https://open.spotify.com/artist/6AcHcYKBjvIpGKWFsfErtD',
  },
  {
    id: 2,
    name: 'Hakan Güray',
    genre: { tr: 'Tekno', en: 'Techno' },
    description: {
      tr: 'Tekno müzik prodüktörü. Endüstriyel ve dark techno tarzında üretimler yapıyor.',
      en: 'Techno music producer. Creates productions in industrial and dark techno style.'
    },
    image: '/images/hakangüray.jpg',
    spotifyUrl: 'https://open.spotify.com/artist/2B2mBRXPcC5ONhdhOrJ0zX',
  },
  {
    id: 3,
    name: 'Teymullah',
    genre: { tr: 'Pop', en: 'Pop' },
    description: {
      tr: 'Pop müzik sanatçısı. Modern ve enerjik şarkılar üretiyor.',
      en: 'Pop music artist. Creates modern and energetic songs.'
    },
    image: '/images/teymullah.jpg',
    spotifyUrl: 'https://open.spotify.com/artist/4bsb7ElO0Euy32G1OyZ4RE',
  },
  {
    id: 4,
    name: 'Fatma Polat',
    genre: { tr: 'R&B / Soul', en: 'R&B / Soul' },
    description: {
      tr: 'Duygusal vokalleriyle tanınan R&B ve soul sanatçısı.',
      en: 'R&B and soul artist known for emotional vocals.'
    },
    image: '/images/fatmapolat.jpg',
    spotifyUrl: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
  },
  {
    id: 5,
    name: 'zenaly',
    genre: { tr: 'Rap', en: 'Rap' },
    description: {
      tr: 'Söz yazarı ve rap sanatçısı. Modern ve enerjik beatler.',
      en: 'Lyricist and rap artist. Modern and energetic beats.'
    },
    image: '/images/zenaly.jpg',
    spotifyUrl: 'https://open.spotify.com/artist/4t8Vci0kIxjhdnS9FlSjDd',
  },
  {
    id: 6,
    name: 'Atilla Kaya',
    genre: { tr: 'Caz', en: 'Jazz' },
    description: {
      tr: 'Caz vokali ve besteci. Modern caz tınılarıyla dikkat çekiyor.',
      en: 'Jazz vocalist and composer. Notable for modern jazz tones.'
    },
    image: '/images/atillakaya.jpg',
    spotifyUrl: 'https://open.spotify.com/artist/5YGY8feqx7naU7z4HrwZM6',
  },
]

const releases = [
  {
    id: 1,
    title: 'Unutursun Diye',
    artist: 'Hakan Güray',
    cover: '/images/hakangüray.jpg',
    spotifyUrl: 'https://open.spotify.com/intl-tr/track/2c4bOlpaNavEzcOcGocJTE',
    releaseDate: '2024',
    genre: { tr: 'Deep House', en: 'Deep House' },
    description: {
      tr: 'Minimal ve derin house tınılarıyla dolu yeni EP.',
      en: 'New EP filled with minimal and deep house tones.'
    }
  },
  {
    id: 2,
    title: 'Özledim Seni',
    artist: 'Atilla Kaya',
    cover: '/images/atillakaya.jpg',
    spotifyUrl: 'https://open.spotify.com/track/6hSn4oycbCH4XDKl9Ds8DA',
    releaseDate: '2024',
    genre: { tr: 'Arabesk', en: 'Arabesk' },
    description: {
      tr: 'Endüstriyel ve arabest tarzında yeni albüm.',
      en: 'New album in industrial and arabest style.'
    }
  },

  {
    id: 3,
    title: 'Bol Pantolon Ve 70 Lik',
    artist: 'Zenaly',
    cover: '/images/zenaly.jpg',
    spotifyUrl: 'https://open.spotify.com/track/6LbNOjSi35zyp8ILMhQ37V',
    releaseDate: '2024',
    genre: { tr: 'Tekno', en: 'Techno' },
    description: {
      tr: 'Endüstriyel ve dark techno tarzında yeni albüm.',
      en: 'New album in industrial and dark techno style.'
    }
  },
]

const content = {
  hero: {
    title: {
      tr: 'Müziğin Geleceği',
      en: 'The Future of Music'
    },
    subtitle: {
      tr: 'Yeni nesil müzik platformu ile sanatçılarımızın özgün seslerini keşfedin',
      en: 'Discover the unique voices of our artists through our next-generation music platform'
    },
    cta: {
      tr: 'Sanatçılarımızı Keşfet',
      en: 'Discover Our Artists'
    }
  },
  artists: {
    title: {
      tr: 'Sanatçılarımız',
      en: 'Our Artists'
    },
    cta: {
      tr: 'Tüm Sanatçıları Gör',
      en: 'View All Artists'
    },
    spotify: {
      tr: 'Spotify\'da Dinle',
      en: 'Listen on Spotify'
    }
  },
  releases: {
    title: {
      tr: 'Yeni Yayınlar',
      en: 'New Releases'
    },
    cta: {
      tr: 'Tüm Yayınları Gör',
      en: 'View All Releases'
    }
  }
}

export default function Home() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary-dark to-black" />
          
          {/* Animated noise overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-50 mix-blend-overlay" />
          </div>
          
          {/* Glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-gradient mb-6">
              {content.hero.title[language]}
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
              {content.hero.subtitle[language]}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hover-glow"
            >
              <Link href="/artists" className="btn-primary">
                {content.hero.cta[language]}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Artists Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <motion.h2 
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {content.artists.title[language]}
          </motion.h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="py-8"
          >
            {artists.map((artist) => (
              <SwiperSlide key={artist.id}>
                <motion.div 
                  className="bg-secondary/30 rounded-lg overflow-hidden backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{artist.name}</h3>
                    <p className="text-primary mb-2">{artist.genre[language]}</p>
                    <p className="text-gray-300 mb-4">{artist.description[language]}</p>
                    <a
                      href={artist.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <motion.div
                        className="flex items-center justify-center gap-2 bg-[#1DB954] text-white py-2 px-4 rounded-lg hover:bg-[#1ed760] transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <svg
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                        </svg>
                        <span className="font-semibold">{content.artists.spotify[language]}</span>
                      </motion.div>
                    </a>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link href="/artists" className="btn-secondary">
              {content.artists.cta[language]}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Releases Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <motion.h2 
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {content.releases.title[language]}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {releases.map((release, index) => (
              <motion.div
                key={release.id}
                className="bg-secondary/30 rounded-lg overflow-hidden backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative aspect-square">
                  <Image
                    src={release.cover}
                    alt={release.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{release.title}</h3>
                  <p className="text-primary mb-2">{release.artist}</p>
                  <p className="text-gray-300 mb-2">{release.genre[language]}</p>
                  <p className="text-gray-400 mb-4">{release.description[language]}</p>
                  <a
                    href={release.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <motion.div
                      className="flex items-center justify-center gap-2 bg-[#1DB954] text-white py-2 px-4 rounded-lg hover:bg-[#1ed760] transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                      </svg>
                      <span className="font-semibold">{content.artists.spotify[language]}</span>
                    </motion.div>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link href="/releases" className="btn-secondary">
              {content.releases.cta[language]}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 