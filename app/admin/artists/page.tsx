'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

interface Artist {
  id: string
  name: string
  slug: string
  createdAt: string
}

export default function ArtistsList() {
  const { data: session, status } = useSession()
  const [artists, setArtists] = useState<Artist[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin/artists')
      .then((res) => res.json())
      .then((data) => {
        setArtists(data)
        setLoading(false)
      })
  }, [])

  if (status === 'loading' || loading) return <p>Yükleniyor...</p>
  if (!session) redirect('/admin/login')

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-display text-primary">Sanatçılar</h1>
        <Link href="/admin/artists/new" className="bg-primary text-black px-4 py-2 rounded font-semibold">Yeni Artist</Link>
      </div>
      {artists.length === 0 ? (
        <p>Henüz artist yok.</p>
      ) : (
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b border-primary/30 py-2">Ad</th>
              <th className="border-b border-primary/30 py-2">Slug</th>
              <th className="border-b border-primary/30 py-2">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {artists.map((a) => (
              <tr key={a.id} className="hover:bg-white/5">
                <td className="py-2">{a.name}</td>
                <td>{a.slug}</td>
                <td>
                  <Link href={`/admin/artists/${a.id}`} className="text-primary">Düzenle</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
