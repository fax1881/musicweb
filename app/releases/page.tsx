'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const releases = [
  {
    id: 1,
    title: 'HipHop/Rap',
    artist: 'poyrazoraman',
    cover: '/images/release-placeholder.jpg',
    spotifyUrl: 'https://open.spotify.com/embed/artist/6AcHcYKBjvIpGKWFsfErtD',
    releaseDate: '2024',
  },
  {
    id: 2,
    title: 'Arabest',
    artist: 'Hakan Güray',
    cover: '/images/hakangüray.jpg',
    spotifyUrl: 'https://open.spotify.com/embed/artist/2B2mBRXPcC5ONhdhOrJ0zX',
    releaseDate: '2024',
  },
 {
    id: 2,
    title: 'Pop',
    artist: 'Fatma Polat',
    cover: '/images/release-placeholder.jpg',
    spotifyUrl: 'https://open.spotify.com/embed/artist/7J15rRmjDXGyv3ip6CdmeM',
    releaseDate: '2024',
  },
 {
    id: 2,
    title: 'Rap',
    artist: 'Zenaly',
    cover: '/images/release-placeholder.jpg',
    spotifyUrl: 'https://open.spotify.com/embed/artist/4t8Vci0kIxjhdnS9FlSjDd',
    releaseDate: '2024',
  },


  // Add more releases as needed
]

export default function ReleasesPage() {
  const { language } = useLanguage()

  const content = {
    title: {
      tr: 'Yayınlarımız',
      en: 'Our Releases'
    }
  }

  return (
    <main className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container-custom">
        <motion.h1 
          className="text-4xl md:text-5xl font-display font-bold text-primary mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {content.title[language]}
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {releases.map((release) => (
            <motion.div
              key={release.id}
              className="bg-secondary/30 rounded-lg overflow-hidden backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">
                  {release.title}
                </h2>
                <p className="text-primary/80">{release.artist}</p>
                <p className="text-white/70">{release.releaseDate}</p>
                <div className="aspect-[16/9] w-full">
                  <iframe
                    src={release.spotifyUrl}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
} 