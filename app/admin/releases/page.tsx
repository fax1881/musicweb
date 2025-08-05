'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

interface Release {
  id: string
  title: string
  slug: string
  type: string
  date: string
  artist?: { name: string }
}

export default function ReleasesList() {
  const { data: session, status } = useSession()
  const [releases, setReleases] = useState<Release[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin/releases')
      .then((res) => res.json())
      .then((data) => {
        setReleases(data)
        setLoading(false)
      })
  }, [])

  if (status === 'loading' || loading) return <p>Yükleniyor...</p>
  if (!session) redirect('/admin/login')

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-display text-primary">Yayınlar</h1>
        <Link href="/admin/releases/new" className="bg-primary text-black px-4 py-2 rounded font-semibold">Yeni Release</Link>
      </div>
      {releases.length === 0 ? (
        <p>Henüz yayın eklenmedi.</p>
      ) : (
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b border-primary/30 py-2">Başlık</th>
              <th className="border-b border-primary/30 py-2">Sanatçı</th>
              <th className="border-b border-primary/30 py-2">Tür</th>
              <th className="border-b border-primary/30 py-2">Tarih</th>
              <th className="border-b border-primary/30 py-2">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {releases.map((r) => (
              <tr key={r.id} className="hover:bg-white/5">
                <td className="py-2">{r.title}</td>
                <td>{r.artist?.name}</td>
                <td>{r.type}</td>
                <td>{new Date(r.date).toLocaleDateString()}</td>
                <td>
                  <Link href={`/admin/releases/${r.id}`} className="text-primary">Düzenle</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
