'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const artists = [
  {
    id: 1,
    name: 'poyrazoraman',
    genre: 'Electronic / House',
    image: '/images/poyrazoraman.jpg',
    description: 'Elektronik müzik prodüktörü ve DJ. Minimal ve deep house tarzında üretimler yapıyor.',
    spotifyUrl: 'https://open.spotify.com/artist/6AcHcYKBjvIpGKWFsfErtD',
  },
  {
    id: 2,
    name: 'Hakan Güray',
    genre: 'Techno',
    image: '/images/hakangüray.jpg',
    description: 'Tekno müzik prodüktörü. Endüstriyel ve dark techno tarzında üretimler yapıyor.',
    spotifyUrl: 'https://open.spotify.com/artist/2B2mBRXPcC5ONhdhOrJ0zX',
  },
  {
    id: 3,
    name: 'Teymullah',
    genre: 'Pop',
    image: '/images/teymullah.jpg',
    description: 'Pop müzik sanatçısı. Modern ve enerjik şarkılar üretiyor.',
    spotifyUrl: 'https://open.spotify.com/artist/4bsb7ElO0Euy32G1OyZ4RE',
  },
  {
    id: 4,
    name: 'Fatma Polat',
    genre: 'R&B / Soul',
    image: '/images/fatmapolat.jpg',
    description: 'Duygusal vokalleriyle tanınan R&B ve soul sanatçısı.',
    spotifyUrl: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
  },
  {
    id: 5,
    name: 'zenaly',
    genre: 'Rap',
    image: '/images/zenaly.jpg',
    description: 'Söz yazarı ve rap sanatçısı. Modern ve enerjik beatler.',
    spotifyUrl: 'https://open.spotify.com/artist/4t8Vci0kIxjhdnS9FlSjDd',
  },
  {
    id: 6,
    name: 'Atilla Kaya',
    genre: 'Jazz',
    image: '/images/atillakaya.jpg',
    description: 'Caz vokali ve besteci. Modern caz tınılarıyla dikkat çekiyor.',
    spotifyUrl: 'https://open.spotify.com/artist/5YGY8feqx7naU7z4HrwZM6',
  },
  // Add more artists as needed
]

export default function ArtistsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container-custom">
        <motion.h1 
          className="text-4xl md:text-5xl font-display font-bold text-primary mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sanatçılarımız
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <motion.div
              key={artist.id}
              className="bg-secondary/30 rounded-lg overflow-hidden backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-square relative">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-display font-bold text-primary mb-2">
                  {artist.name}
                </h2>
                <p className="text-primary/80 mb-3">{artist.genre}</p>
                <p className="text-white/70 mb-4">{artist.description}</p>
                <a
                  href={artist.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full"
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
                    <span className="font-semibold">Spotify'da Dinle</span>
                  </motion.div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
} 