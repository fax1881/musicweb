"use client"

import useSWR from 'swr'

export const dynamic = 'force-dynamic'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function NewsPage() {
  const { data: news, isLoading } = useSWR('/api/news', fetcher, { refreshInterval: 30000 })

  if (isLoading || !news) {
    return (
      <main className="min-h-screen pt-24 pb-16 bg-background flex items-center justify-center">
        <p className="text-white/70">Yükleniyor...</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-12">Haberler</h1>

        {news.length === 0 ? (
          <p className="text-white/70">Henüz haber eklenmedi.</p>
        ) : (
          <div className="space-y-8">
            {news.map((item: any) => (
              <article key={item.id} className="bg-secondary/30 rounded-lg p-6 shadow-lg backdrop-blur-md hover:shadow-xl transition-all">
                <h2 className="text-2xl font-display font-bold text-primary mb-2">{item.title}</h2>
                <p className="text-white/60 text-sm mb-4">{new Date(item.publishedAt).toLocaleDateString('tr-TR')}</p>
                <p className="text-white/80 whitespace-pre-line">{item.content}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
