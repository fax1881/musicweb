"use client"

import useSWR from 'swr'

export const dynamic = 'force-dynamic'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function ReleasesPage() {
  const { data: releases, isLoading } = useSWR('/api/releases', fetcher, { refreshInterval: 30000 })
  const content = { title: 'Yayınlarımız' }

  if (isLoading || !releases) {
    return (
      <main className="min-h-screen pt-24 pb-16 bg-background flex items-center justify-center">
        <p className="text-white/70">Yükleniyor...</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-12">{content.title}</h1>

        {releases.length === 0 ? (
          <p className="text-white/70">Henüz yayın eklenmedi.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {releases.map((r: any) => (
              <div
                key={r.id}
                className="bg-secondary/30 rounded-lg overflow-hidden backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              >
                <div className="space-y-4">
                  <h2 className="text-2xl font-display font-bold text-primary">{r.title}</h2>
                  <p className="text-primary/80">{r.artist?.name}</p>
                  <p className="text-white/70">{new Date(r.date).getFullYear()}</p>
                  {r.coverImage && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={r.coverImage} alt={r.title} className="w-full rounded-lg" />
                  )}
                  {r.tracks && r.tracks.spotifyEmbed && (
                    <div className="aspect-[16/9] w-full">
                      <iframe
                        src={r.tracks.spotifyEmbed}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="rounded-lg"
                      ></iframe>
                    </div>
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
