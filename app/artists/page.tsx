"use client"

import useSWR from 'swr'

export const dynamic = 'force-dynamic'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function ArtistsPage() {
  const { data: artists, isLoading } = useSWR('/api/artists', fetcher, { refreshInterval: 30000 })

  if (isLoading || !artists) {
    return (
      <main className="min-h-screen pt-24 pb-16 bg-background flex items-center justify-center">
        <p className="text-white/70">Yükleniyor...</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-12">Sanatçılarımız</h1>

        {artists.length === 0 ? (
          <p className="text-white/70">Henüz artist eklenmedi.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist: any) => (
              <div
                key={artist.id}
                className="bg-secondary/30 rounded-lg overflow-hidden backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {artist.image && (
                  <div className="aspect-square relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-display font-bold text-primary mb-2">{artist.name}</h2>
                  {artist.bio && <p className="text-white/70 mb-4 line-clamp-3">{artist.bio}</p>}
                  {artist.socials?.spotify && (
                    <a
                      href={artist.socials.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full"
                    >
                      <div className="flex items-center justify-center gap-2 bg-[#1DB954] text-white py-2 px-4 rounded-lg hover:bg-[#1ed760] transition-colors">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                        </svg>
                        <span className="font-semibold">Spotify'da Dinle</span>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
