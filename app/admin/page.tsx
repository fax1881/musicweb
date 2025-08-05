'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function AdminDashboard() {
    const { data: session, status } = useSession()
  const router = useRouter()
  const [stats, setStats] = React.useState<any | null>(null)

  // Redirect unauthenticated users
  React.useEffect(() => {
    if (status !== 'loading' && !session) {
      router.replace('/admin/login')
    }
  }, [status, session, router])

  // Fetch stats when session is ready
  React.useEffect(() => {
    if (session) {
      fetch('/api/admin/stats')
        .then((r) => r.json())
        .then(setStats)
        .catch(console.error)
    }
  }, [session])

  if (status === 'loading' || !session) {
    return <div className="text-center py-20">Yükleniyor...</div>
  }

  return (
    <div>
      <h1 className="text-3xl font-display text-primary mb-6">Yönetim Paneli</h1>
      <p className="text-white/80">Hoş geldiniz, {session.user?.name || session.user?.email}!</p>

      {/* Counters */}
      {stats && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Sanatçı', count: stats.counts.artists, href: '/admin/artists' },
            { label: 'Yayın', count: stats.counts.releases, href: '/admin/releases' },
            { label: 'Haber', count: stats.counts.news, href: '/admin/news' },
          ].map((c) => (
            <a key={c.label} href={c.href} className="bg-black/60 p-6 rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors text-center">
              <p className="text-4xl font-bold text-primary">{c.count}</p>
              <p className="text-white/70 mt-2">{c.label}</p>
            </a>
          ))}
        </div>
      )}

      {/* Recent */}
      {stats && (
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-primary mb-4">Yeni Sanatçılar</h2>
            <ul className="space-y-2 text-white/80">
              {stats.recent.artists.map((a: any) => (
                <li key={a.id}>{a.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-primary mb-4">Yeni Yayınlar</h2>
            <ul className="space-y-2 text-white/80">
              {stats.recent.releases.map((r: any) => (
                <li key={r.id}>{r.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-primary mb-4">Yeni Haberler</h2>
            <ul className="space-y-2 text-white/80">
              {stats.recent.news.map((n: any) => (
                <li key={n.id}>{n.title}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
