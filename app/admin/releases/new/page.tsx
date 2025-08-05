'use client'

import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { redirect, useRouter } from 'next/navigation'

interface Artist { id: string; name: string }

export default function NewRelease() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [artists, setArtists] = useState<Artist[]>([])
  const [form, setForm] = useState({
    title: '',
    slug: '',
    type: 'single',
    date: '',
    coverImage: '',
    artistId: '',
    tracks: '',
  })
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/admin/artists')
      .then((res) => res.json())
      .then((data) => setArtists(data))
  }, [])

  if (status === 'loading') return null
  if (!session) redirect('/admin/login')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const payload = { ...form, tracks: form.tracks ? JSON.parse(form.tracks) : undefined }
    const res = await fetch('/api/admin/releases', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (res.ok) router.push('/admin/releases')
    else setError((await res.json()).error || 'Hata')
  }

  return (
    <div>
      <h1 className="text-2xl font-display text-primary mb-6">Yeni Release</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <div>
          <label className="block mb-1">Başlık</label>
          <input name="title" value={form.title} onChange={handleChange} required className="w-full bg-white/10 border border-white/20 px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block mb-1">Slug</label>
          <input name="slug" value={form.slug} onChange={handleChange} required className="w-full bg-white/10 border border-white/20 px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block mb-1">Tür</label>
          <select name="type" value={form.type} onChange={handleChange} className="w-full bg-white/10 border border-white/20 px-3 py-2 rounded">
            <option value="single">Single</option>
            <option value="album">Album</option>
            <option value="ep">EP</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Tarih</label>
          <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full bg-white/10 border border-white/20 px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block mb-1">Sanatçı</label>
          <select name="artistId" value={form.artistId} onChange={handleChange} required className="w-full bg-white/10 border border-white/20 px-3 py-2 rounded">
            <option value="">Seçin...</option>
            {artists.map((a) => (
              <option key={a.id} value={a.id}>{a.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1">Kapak Görsel URL</label>
          <input name="coverImage" value={form.coverImage} onChange={handleChange} className="w-full bg-white/10 border border-white/20 px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block mb-1">Track Listesi (JSON array)</label>
          <textarea name="tracks" value={form.tracks} onChange={handleChange} className="w-full bg-white/10 border border-white/20 px-3 py-2 rounded" rows={4} />
        </div>
        <button className="bg-primary text-black px-4 py-2 rounded font-semibold">Kaydet</button>
      </form>
    </div>
  )
}
